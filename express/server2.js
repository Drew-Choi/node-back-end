// @ts-check

const express = require('express');
const app = express();
const PORT = 4000;

// http://localhost:4000/api
// @ts-ignore
app.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  // @ts-ignore
  req.reqTime = new Date();
  next();
});

// @ts-ignore
app.use((req, res, next) => {
  console.log('미들웨어 2');
  // @ts-ignore
  res.send(`요청 시간은 ${req.reqTime} 입니다.`);
});

// @ts-ignore
app.use((req, res, next) => {
  console.log('미들웨어 3');
});

app.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다.`);
});
