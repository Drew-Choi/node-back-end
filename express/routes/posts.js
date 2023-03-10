const express = require('express');

const router = express.Router();

const POST = [
  {
    title: '안녕하세요.',
    content: '애들이 이름 가지고 놀려요 ㅠㅠ',
  },
];

router.get('/', (req, res) => {
  const postCount = POST.length;
  res.render('posts', { POST, postCount });
});

router.post('/addposting', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newPost = {
        title: req.query.title,
        content: req.query.content,
      };

      POST.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('쿼리입력이 잘못되었습니다.');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };

      POST.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('폼 태그 입력을 확인하세요.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 없습니다.');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
