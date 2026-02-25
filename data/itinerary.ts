export interface ItineraryDay {
  day: number
  label: string
  city: string
  title: string
  type: "golf" | "sightseeing" | "travel"
  keyActivity: string
  hotel: string
  details: string[]
  optionalTours?: { name: string; price: string; note?: string }[]
  golfCourse?: {
    name: string
    url: string
    teeTime: string
    note: string
  }
}

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    label: "첫째 날",
    city: "LA",
    title: "LA 도착 & 시티 투어",
    type: "sightseeing",
    keyActivity: "산타모니카 비치 & 헐리우드",
    hotel: "Best Western Plus LA Mid Town Hotel",
    details: [
      "LAX 공항 도착 (오전)",
      "가이드 미팅 후 산타모니카 비치 관광 출발",
      "아름다운 백사장과 최초의 국도 66번 종점 지역",
      "주요 코스: 산타모니카 비치, 베버리힐스, 헐리우드",
      "호텔 도착 체크인",
      "석식 후 휴식",
    ],
  },
  {
    day: 2,
    label: "둘째 날",
    city: "LA",
    title: "골프 투어 (무어팍 CC)",
    type: "golf",
    keyActivity: "무어팍 컨트리클럽 라운딩",
    hotel: "Best Western Plus LA Mid Town Hotel",
    details: [
      "08:00 조식 후 무어팍 컨트리클럽 출발 (또는 동급)",
      "09:20 체크인 후 티샷",
      "골프채 렌트 포함",
      "플레이 후 호텔 이동 휴식",
      "석식 후 그리피스 천문대 야경 관광",
    ],
    golfCourse: {
      name: "무어팍 컨트리클럽 (Moorpark Country Club)",
      url: "https://moorparkcc.com/",
      teeTime: "09:20",
      note: "골프채 렌트 포함",
    },
  },
  {
    day: 3,
    label: "셋째 날",
    city: "그랜드캐니언",
    title: "그랜드캐니언 이동",
    type: "travel",
    keyActivity: "모하비 사막 횡단",
    hotel: "Hampton Inn by Hilton Hotel 또는 동급",
    details: [
      "09:00 조식 후 그랜드캐니언 관광 출발",
      "중간 휴식지 바스토우에서 중식 & 휴식",
      "남한 땅 넓이의 모하비 사막을 거쳐 그랜드캐니언 입구 마을 윌리엄스 이동",
      "19:00 석식 후 호텔 도착 휴식",
    ],
  },
  {
    day: 4,
    label: "넷째 날",
    city: "그랜드캐니언",
    title: "그랜드캐니언 관광",
    type: "sightseeing",
    keyActivity: "세계 절경 그랜드캐니언",
    hotel: "MGM Grand Hotel & Casino Las Vegas 또는 동급",
    details: [
      "08:00 조식 후 그랜드캐니언 관광 출발",
      "타임지 선정 죽기 전에 가야 할 곳 1위",
      "세계에서 가장 웅장하고 원시적이며 아름다운 그랜드캐니언 관광",
      "주요 포인트: 매더 포인트, 엔젤 포인트, 야바파이 포인트, 모하비 포인트 등",
      "17:00 라스베이거스 호텔 도착 휴식",
    ],
    optionalTours: [
      {
        name: "라스베이거스 야경 관광",
        price: "$100",
        note: "약 4시간 소요 / 현장 결제. 주요 코스: 5성급 베네시안 호텔, 벨라지오 호텔 인사이드 및 다운타운 프리몬트 거리 쇼 등",
      },
    ],
  },
  {
    day: 5,
    label: "다섯째 날",
    city: "라스베이거스",
    title: "골프 투어 (시에나 GC)",
    type: "golf",
    keyActivity: "시에나 컨트리클럽 라운딩",
    hotel: "MGM Grand Hotel & Casino Las Vegas",
    details: [
      "08:00 조식 후 시에나 컨트리클럽 출발 (또는 동급)",
      "09:20 체크인 후 티샷",
      "골프채 렌트 포함",
      "플레이 후 호텔 이동 휴식",
      "석식 후 유명 쇼 관람 또는 자유 관광",
    ],
    golfCourse: {
      name: "시에나 컨트리클럽 (Siena Golf Club)",
      url: "https://sienagolfclub.com/",
      teeTime: "09:20",
      note: "골프채 렌트 포함",
    },
    optionalTours: [
      { name: "KA 쇼", price: "$200", note: "현장 결제" },
      { name: "O 쇼", price: "$240", note: "현장 결제" },
      { name: "Sphere 쇼", price: "$220", note: "현장 결제" },
    ],
  },
  {
    day: 6,
    label: "여섯째 날",
    city: "LA",
    title: "캘리코 은광촌 & 아울렛 쇼핑",
    type: "sightseeing",
    keyActivity: "캘리코 고스트타운 & 쇼핑",
    hotel: "Best Western Plus LA Mid Town Hotel",
    details: [
      "09:00 조식 후 LA 출발",
      "미서부 시대 최고의 은광촌 캘리코 은광촌 & 고스트타운 관광",
      "중간 휴식지 바스토우에서 중식 & 휴식",
      "온타리오 프리미엄 아울렛 도착 쇼핑",
      "17:00 LA 호텔 도착 체크인",
      "석식 후 휴식",
    ],
  },
  {
    day: 7,
    label: "일곱째 날",
    city: "LA",
    title: "인천 출발",
    type: "travel",
    keyActivity: "LAX 공항 출발",
    hotel: "",
    details: [
      "조식 후 LAX 공항 출발",
      "공항 도착 티켓팅 후 탑승 수속",
      "인천공항 출발",
    ],
  },
]

export const pricing = {
  perPerson: "$2,650",
  basis: "4인 기준",
  inclusions: [
    { label: "전 일정 차량", desc: "7인승 벤" },
    { label: "기사님 겸 가이드", desc: "전 일정 동행" },
    { label: "호텔", desc: "전 일정 숙박" },
    { label: "식사", desc: "전 일정 식사" },
    { label: "그랜드캐니언", desc: "입장료 포함" },
    { label: "골프채 렌탈 2회", desc: "무어팍 CC + 시에나 GC" },
  ],
  exclusions: [
    { label: "가이드 팁", desc: "1일 $100" },
    { label: "선택 관광", desc: "현장 결제" },
    { label: "리조트 피", desc: "1일 $50~$65 (라스베이거스)" },
  ],
}

export const tipGuide = [
  { place: "일반 식당", amount: "총금액의 15%~20%" },
  { place: "호텔 뷔페", amount: "총금액의 10%~20%" },
  { place: "기사 겸 가이드", amount: "1일 $100 (별도)" },
]

export const companyInfo = {
  name: "GAJU TOUR, INC.",
  license: "CST 2103448-40",
  address: "2730 W Olympic Blvd #303, Los Angeles, CA 90015 USA",
  telUS: "033-742-8053",
  telKorea: "010-4766-8053",
  website: "www.gajutour.com",
}

export const notices = [
  "호텔 비용은 예약 시점에 따라 가격이 변동될 수 있습니다.",
  "라스베이거스의 고급 Resort Hotel에서는 호텔 체크아웃 시 별도의 Resort Fee를 부과합니다.",
  "Resort Fee는 호텔 비용에 불포함되며 호텔 체크아웃 때 별도로 결제합니다. (1일 $50~$65)",
  "미국 입국 시 여권에 6개월 이상의 유효기간이 있어야 입국이 가능합니다.",
  "손님의 부주의로 인한 부상, 분실은 관례에 따라 면책됩니다.",
]

export const preparations = [
  "여권",
  "세면도구",
  "개인 상비약",
  "선글라스",
  "선블록 로션",
  "모자",
  "슬리퍼",
]
