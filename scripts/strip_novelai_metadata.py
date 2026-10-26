#!/usr/bin/env python3
"""Remove NovelAI PNG text metadata without decoding or modifying image pixels."""
from pathlib import Path
import os
import struct
import zlib

PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
TEXT_CHUNKS = {b"tEXt", b"zTXt", b"iTXt"}

def clean_png(path: Path):
    data = path.read_bytes()
    if not data.startswith(PNG_SIGNATURE):
        return "not_png"
    pos = 8
    chunks = []
    removed = 0
    while pos + 12 <= len(data):
        start = pos
        n = struct.unpack_from(">I", data, pos)[0]
        kind = data[pos + 4:pos + 8]
        end = pos + 12 + n
        if n > len(data) - pos - 12:
            return "invalid"
        payload = data[pos + 8:pos + 8 + n]
        crc = struct.unpack_from(">I", data, pos + 8 + n)[0]
        if zlib.crc32(kind + payload) & 0xffffffff != crc:
            return "invalid"
        if kind in TEXT_CHUNKS:
            removed += 1
        chunks.append((kind, data[start:end]))
        pos = end
        if kind == b"IEND":
            break
    if not chunks or chunks[-1][0] != b"IEND" or pos != len(data):
        return "invalid"
    if not removed:
        return "already_clean"
    cleaned = PNG_SIGNATURE + b"".join(
        raw for kind, raw in chunks if kind not in TEXT_CHUNKS
    )
    if cleaned != data:
        temp = path.with_name(path.name + ".novelai-clean.tmp")
        temp.write_bytes(cleaned)
        os.replace(temp, path)
        return "cleaned"
    return "already_clean"

def main():
    counts = {}
    for path in Path("assets").rglob("*.png"):
        result = clean_png(path)
        counts[result] = counts.get(result, 0) + 1
    print("PNG text metadata cleanup:", counts)
    if counts.get("invalid"):
        raise SystemExit("Some PNG files failed structural or CRC checks")
    if counts.get("other"):
        raise SystemExit("Unexpected PNG metadata scan result")
    if counts.get("cleaned"):
        remaining = [str(p) for p in Path("assets").rglob("*.png") if clean_png(p) != "already_clean"]
        if remaining:
            raise SystemExit("Post-cleanup verification failed: " + ", ".join(remaining[:5]))
    print("Verified: all scanned PNGs have no tEXt/zTXt/iTXt chunks")

if __name__ == "__main__":
    main()
