// @ts-check

const express = require('express');

const router = express.Router();

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
    email: 'a@daum.net',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: 'b@daum.net',
  },
];

router.get('/', (req, res) => {
  const userCount = USERARR.length;
  res.render('users', { USERARR, userCount });
});

router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(USER);
  } else {
    res.send('ID를 못찾겠어요.');
  }
});

router.post('/add', (req, res) => {
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

router.put('/modify/:id/', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원등록 삭제완료 완료');
  } else {
    res.send('id가 존재하지 않습니다.');
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USERARR.length; i += 1) {
    res.write(`<h2>USER ID is ${USERARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USERARR[i].name}</h2>`);
    res.write(`<h2>USER Email is ${USERARR[i].email}</h2>`);
  }

  res.end();
});

// router.get('/ejs', (req, res) => {
//   const userCount = USERARR.length;
//   res.render('index', { USERARR, userCount });
// });

module.exports = router;
