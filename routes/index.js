const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render("form")
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date(), id: messages.length + 1});
  res.redirect('/');
});

router.get('/:id', function(req, res, next) {
  const messageId = req.params.id;
  for (const message of messages) {
    if (message.id === parseInt(messageId)) {
      res.render("message", {message: message})
    }
  }
  
});

module.exports = router;
