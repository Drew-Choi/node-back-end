// @ts-check

const express = require('express');

const app = express();
const userRouter = express.Router();

const PORT = 4000;

const USER = {
  1: {
    id: 'tetz',
    name: '이효석',
  },
};

const USERARR = [
  {
    id: 'tetz',
    name: '이효석',
  },
  {
    id: 'pororo',
    name: '뽀로로',
  },
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log('Hello world');
});

app.use('/user', userRouter);
//http://localhost:4000/user
//http://127.0.0.1:4000/user
userRouter.get('/', (req, res) => {
  res.send(USER);
  console.log(USER[1]);
});

userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(USER);
  } else {
    res.send('ID를 못찾겠어요.');
  }
});

userRouter.post('/add', (req, res) => {
  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };
  //   USER[Object.keys(USER).length + 1] = newUser;
  //   res.send('회원등록 완료');
  // } else {
  //   res.send('쿼리 입력이 잘못 되었습니다.');
  // }
  if (!req.query.id || !req.query.name) {
    return res.end('쿼리입력이 잘못 되었습니다.');
  }

  if (req.query.id && req.query.name) {
    const newUser = {
      id: req.query.id,
      name: req.query.name,
    };
    USER[Object.keys(USER).length + 1] = newUser;
    res.send('회원등록 완료');
  }
});

userRouter.put('/modify/:id/', (req, res) => {
  if (req.query.id && req.query.name) {
    if (req.params.id in USER) {
      USER[req.params.id].id = req.query.id;
      USER[req.params.id].name = req.query.name;
      res.send('회원등록 수정 완료');
    } else {
      res.send('해당 id가 없습니다.');
    }
  } else {
    res.send('잘못 된 쿼리입력');
  }
});

userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원등록 삭제완료 완료');
  } else {
    res.send('id가 존재하지 않습니다.');
  }
});

userRouter.get('/show', (req, res) => {
  res.writeHead(200, { 'content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USERARR.length; i += 1) {
    res.write(`<h2>USER ID is ${USERARR[i].id}</h2>`);
    res.write(`<h2>USER ID is ${USERARR[i].name}</h2>`);
  }

  res.end();
});

userRouter.get('/ejs', (req, res) => {
  const userCount = USERARR.length;
  res.render('index', { USERARR, userCount });
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중`);
});
