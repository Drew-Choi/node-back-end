// @ts-check

const express = require('express');

//모듈사용
const userRouter = require('./routes/user');
const mainRouter = require('./routes/index');

const app = express();

const PORT = 4000;

//ejs에서 순수바자와 css파일 임폴트 가능하도록 하는 것
app.use(express.static('public'));

app.use('/', mainRouter);
app.use('/user', userRouter);
//http://localhost:4000/user
//http://127.0.0.1:4000/user

//ejs 세팅
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('Hello world');
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
