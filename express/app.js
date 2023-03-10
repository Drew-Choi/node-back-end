// @ts-check

//패키지 및 모듈 리콰이어 부분
const express = require('express');
const app = express();

//바디파서 설치
const bodyParser = require('body-parser');
//라우터들
const userRouter = require('./routes/user');
const mainRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const { STATUS_CODES } = require('http');

const PORT = 4000;

//body-parser 세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//ejs에서 순수바자와 css파일 임폴트 가능하도록 하는 것
app.use(express.static('public'));
//ejs 세팅
app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/posts', postsRouter);
//http://localhost:4000/user
//http://127.0.0.1:4000/user

//미드웨어부분
// app.get('/', (req, res) => {
//   console.log('Hello world');
// });

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `<a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
