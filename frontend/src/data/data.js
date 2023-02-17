export const userData = [
  {
    uid: 0, // user uid
    username: "노휫",
    password: "nowheat",
  },
  {
    uid: 1, // user uid
    username: "dora",
    password: "noja",
  },
  {
    uid: 2, // user uid
    username: "오리너구리",
    password: "platypus",
  },
];

export const postData = [
  {
    uid: 0, // post uid
    hashid: 0, // post hash id
    createdDate: "2022-01-30T10:03:47.564Z",
    modifiedDate: "2022-01-30T10:03:47.564Z",
    writer: 0, // user uid
    title: "자랑글! 헿 (+추가)",
    content: "개인 수영장 샀당",
    images: ["swimmingpool.jpg"], // image url list or image uid list
  },
  {
    uid: 1, // post uid
    hashid: 1, // post hash id
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 1, // user uid
    title: "도라는 귀여워",
    content:
      "도라는 너무너무 귀여워 코랑 발이 새까맣구 프랑스어로 솜뭉치를 뜻하는 꼬똥이라는 종이야 2015년 6월 10일 생인데 너무 동안이라 산책 나갈 때마다 사람들이 몇 개월이냐고 물어봐 껴안고 자면 따뜻하고 가끔 말을 안 들어도 귀여워서 간식을 아무때나 막 주곤 해 너무너무 부럽지? 도라도라도라도라 귀여워",
    images: ["dora1.jpg", "dora2.jpg", "dora3.jpg"], // image url list or image uid list
  },
];

export const commentData = [
  {
    uid: 0, // comment uid
    post: 0, // post uid
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 1, // user uid
    isBonus: true,
    content: "너무 부러워요~",
  },
  {
    uid: 1, // comment uid
    post: 0, // post uid
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 2, // user uid
    isBonus: true,
    content: "헤엄치고 싶군",
  },
  {
    uid: 2, // comment uid
    post: 1, // post uid
    createdDate: "2022-01-30T10:03:47.564Z",
    modifiedDate: "2022-01-30T10:03:47.564Z",
    writer: 2, // user uid
    isBonus: true,
    content: "나도 도라 줘",
  },
];

export const quizData = [
  {
    uid: 0, // quiz uid
    post: 1, // post uid
    isActive: true,
    lastModified: "2022-01-29T10:03:47.564Z",
    quiz: [
      {
        question: "도라는 무슨 종인가요?",
        choices: ["말티즈", "비숑", "꼬똥", "잡종"],
        answer: 2,
      },
      {
        question: "도라 생일은 언제인가요?",
        choices: ["1/16", "6/10", "12/25"],
        answer: 1,
      },
    ],
  },
];

export const resultData = [
  {
    uid: 0, // result uid
    viewer: 0, // user uid
    post: 0, // post uid
    quizSolved: "2022-01-29T10:03:47.564Z",
    submissions: "submission",
    quizScore: 0,
    bonusComment: 0, // comment uid
    bonusScore: 0,
    bonusScoreChecked: "2022-01-29T10:03:47.564Z",
    totalScore: 0,
  },
];
