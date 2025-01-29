const express = require('express');
const db = require('../db/queries');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await db.getAllMessages();
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render("form")
});

router.post('/new', async function(req, res, next) {
  await db.insertMessage(req.body.messageUser, req.body.messageText)
  res.redirect('/');
});

router.get('/:id', async function(req, res, next) {
  const messageId = req.params.id;
  const message = await db.findMessage(messageId);
  res.render("message", {message: message})
  
});

module.exports = router;
