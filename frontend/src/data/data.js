export const userData = [
  {
    uid: 0, // user uid
    username: "username",
    password: "password",
  },
];

export const postData = [
  {
    uid: 0, // post uid
    hashid: 0, // post hash id
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 0, // user uid
    title: "Title",
    content: "Example content that is short",
    images: ["imageurl1", "imageurl2", "imageurl3", "imageurl4"], // image url list or image uid list
  },
];

export const commentData = [
  {
    uid: 0, // comment uid
    post: 0, // post uid
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 0, // user uid
    isBonus: true,
    content: "Example comment",
  },
  {
    uid: 1, // comment uid
    post: 1, // post uid
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 0, // user uid
    isBonus: true,
    content: "Example comment",
  },
  {
    uid: 2, // comment uid
    post: 0, // post uid
    createdDate: "2022-01-29T10:03:47.564Z",
    modifiedDate: "2022-01-29T10:03:47.564Z",
    writer: 0, // user uid
    isBonus: true,
    content: "Example comment",
  },
];

export const quizData = [
  {
    uid: 0, // quiz uid
    post: 0, // post uid
    isActive: true,
    lastModified: "2022-01-29T10:03:47.564Z",
    title: "question",
    content: "content",
    candidates: ["answer1", "answer2"],
    answer: 0,
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
