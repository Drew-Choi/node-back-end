// @ts-check

const express = require('express');
const app = express();
const PORT = 4000;
const fs = require('fs').promises;

// http://localhost:4000/
// @ts-ignore
app.use('/', async (req, res, next) => {
  console.log('미들웨어 1');
  // @ts-ignore
  req.reqTime = new Date();
  // @ts-ignore
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

// @ts-ignore
app.use((req, res, next) => {
  console.log('미들웨어 2');
  // @ts-ignore
  console.log(`데이터 요청 시간은 ${req.reqTime}입니다.`);
  // @ts-ignore
  console.log(`.package.json 파일의 내용은 \n ${req.fileContent}입니다.`);
  // @ts-ignore
  res.send(req.fileContent);
});

app.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동 중입니다.`);
});
