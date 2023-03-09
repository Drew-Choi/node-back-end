// @ts-check

const express = require('express');

const userRouter = require('./routing/user');

const app = express();

const PORT = 4000;

app.use(express.static('public'));

app.use('/user', userRouter);
//http://localhost:4000/user
//http://127.0.0.1:4000/user

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('Hello world');
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
