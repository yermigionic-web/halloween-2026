// Character display names by world and existing asset filename stem.
// Edit the Korean labels here; image filenames in assets/ stay unchanged.
// Filename differences already reconciled: frederika, jangryeosun, seojioh,
// riley, aryoo, kimseongmin, kowoojoon, namjoowon.
// The orphan leeihhu-illust-1 image is merged with leeihu in app.js.
// yoyo-floating-sd.png is a tappable floating decoration, not a folder.
const CHARACTER_NAMES = {
  "인간은-아무도-없다": {
    "natsume": "쿠로키 나츠메",
    "rino": "나칸다카리 리노",
    "morita": "모리타 아카리",
    "madoka": "에노모토 마도카",
    "kyoko": "타카가미 쿄코"
  },
  "소문의-그-아이": {
    "towaka": "마타라 토와카"
  },
  "흉수": {
    "virelle": "비렐",
    "tavi": "타비",
    "orviane": "오비안"
  },
  "현재-궤도-감정-없음": {
    "gongjinhwa": "공진화",
    "yoyo": "요요",
    "kyungryewoo": "경려우"
  },
  "의학적으로-연애-불가능": {
    "kimjiwan": "김지완",
    "jeongeunsung": "정은성",
    "kangbin": "강빈",
    "kimsion": "김시온",
    "leechaehyung": "이채형",
    "ohyoonkyung": "오윤경",
    "parkharim": "박하림",
    "yoojeonghee": "유정희"
  },
  "TOCHKA": {
    "hainagi": "하이나기",
    "koda": "코다"
  },
  "PASSIVEDRIVE": {
    "cloe": "CLOE"
  },
  "인권침해구역": {
    "leekukyeom": "이국겸",
    "kookunmyeong": "구건명",
    "jangryeosun": "장려선",
    "limheedong": "임희동",
    "janghaerim": "장해림",
    "cheongso": "청소"
  },
  "언더그라운드-허니": {
    "mai": "아키야마 마이",
    "natsume": "쿠로키 나츠메",
    "nana": "이시하라 나나",
    "miu": "사토 미우",
    "kazuki": "니시 카즈키",
    "azusa": "세카이바시 아즈사",
    "taiki": "아사노 타이키",
    "leon": "이케다 레온",
    "tooru": "하야시 토오루",
    "ken": "후카자와 켄",
    "abel": "키타 아벨"
  },
  "CINDERELLAS": {
    "wilhelmina": "빌헬미나 슈타인",
    "frederika": "프레데리카 융거",
    "beatrice": "베아트리스 베리모어",
    "eliza": "엘라이자 콜",
    "hannah": "한나 크루거",
    "zhenya": "제냐 지민-티토바",
    "beom": "범",
    "claude": "클로드 빌네브"
  },
  "술에-취하면-안-돼": {
    "sloane": "슬론 워커"
  },
  "JUNE-BRATS": {
    "lyra": "리라 나바로",
    "tavi": "타비",
    "claire": "클레어 도넬리",
    "madison": "매디슨 라로슈",
    "rowan": "로완 베일",
    "lena": "레나 조",
    "cassidy": "캐서디 토레스",
    "riley": "라일리 녹스"
  },
  "KISS-KISS-KISS": {
    "hyunkyung": "현경",
    "nasurim": "나수림",
    "kimyeonjoo": "김연주"
  },
  "평온한-다정": {
    "leedajeong": "이다정"
  },
  "ZEN": {
    "nyen": "녠",
    "kubera": "쿠베라",
    "asura": "아수라",
    "preta": "프레타",
    "gyenang": "계낭",
    "aryoo": "알유",
    "ekek": "에켁",
    "tikbalang": "틱발랑"
  },
  "옷장,거미줄,뱀파이어": {
    "izella": "이젤라"
  },
  "LOVE-PARANOIA": {
    "kimhara": "김하라",
    "leeihu": "이이후",
    "leesikyung": "이시경",
    "minhanee": "민하늬",
    "kimseongmin": "김성민",
    "parkjion": "박지온",
    "namjoowon": "남주원",
    "kowoojoon": "고우준",
    "yoonyoonsun": "윤윤선"
  },
  "FFG-332": {
    "leeseoim": "이서임",
    "hansejin": "한세진",
    "seojioh": "서지오",
    "dokyungwon": "도경원",
    "jeongsunghye": "정성혜",
    "kimseodam": "김서담",
    "ryuwoohee": "류우희",
    "kangboree": "강보리",
    "ohminzo": "오민조",
    "jeonnara": "전나라",
    "kimchaeyoon": "김채윤"
  },
  "난세-혹은-멸망으로": {
    "mookyung": "무경 · 혼돈",
    "yooeon": "유언 · 궁기",
    "idan": "이단 · 도올",
    "dami": "다미 · 도철",
    "argent": "아르장",
    "gules": "귈",
    "sable": "세이블",
    "azure": "아주르"
  },
  "녹슨-너의-행성계": {
    "ailen": "아일렌 모르시에",
    "theona": "테오나 카르베트",
    "miela": "미엘라 도르셋",
    "sabel": "사벨 에르키안",
    "isera": "이세라 벨루아",
    "casia": "카시아 베르모트",
    "orphe": "오르페 마티엘",
    "darion": "다리온 헤이브릭",
    "yunat": "유나트 솔베",
    "firen": "피렌 아스토르"
  },
  "코이브린네": {
    "minea": "미네아 라이네",
    "riika": "리카 헤이키넨",
    "veera": "베라 코스키넨",
    "putkiakka": "푸트키아카",
    "kuorimuiya": "쿠오리무이야",
    "kilma": "킬마 카이사"
  },
  "숨긴다고숨겨지니더티나": {
    "annahyeon": "안나현",
    "seoyoosang": "서유상",
    "banyeong": "반영"
  },
  "강남헌터공무원": {
    "kwakhaesol": "곽해솔",
    "ryudan": "류단",
    "hwangbosora": "황보소라",
    "jeongmiro": "정미로",
    "chayeoreum": "차여름",
    "parkbok": "박복",
    "kangminwon": "강민원",
    "sunwoonakyung": "선우나경",
    "sungdahae": "성다해"
  },
  "대치헌터키즈": {
    "kimserena": "김세레나",
    "parkjihyun": "박지현",
    "leesunhyung": "이선형",
    "choiyuri": "최유리",
    "yoonhanbyul": "윤한별",
    "leeyeonseo": "이연서",
    "parksonga": "박송아",
    "haneunyeong": "한은영",
    "choihyunjeong": "최현정",
    "seomyungjin": "서명진"
  },
  "불을-켜-둔-뒤에도": {
    "shihuiru": "쉬후이루",
    "yeweiting": "예웨이팅",
    "chaiyawon": "차이야원",
    "chaixinyu": "차이신위",
    "guijin": "궈이쥔",
    "rinfeitu": "린페이츠",
    "jeujingi": "저우징이",
    "kaowetin": "가오유친"
  },
  "DOGMA-RESIST": {
    "mai": "아키야마 마이",
    "natsume": "쿠로키 나츠메",
    "nana": "이시하라 나나",
    "miu": "사토 미우",
    "kazuki": "니시 카즈키",
    "azusa": "세카이바시 아즈사",
    "sasori·men": "사소리 & 멘"
  },
  "국힙은-여친이-필요해": {
    "sl00z": "SL00Z",
    "kaykayo": "KAY KAYO",
    "jaeone": "JAE-ONE",
    "janedoe": "Jane Doe",
    "lilsoda": "Lil Soda",
    "nafi": "NAFI",
    "youngerror": "Young ERROR"
  }
};
