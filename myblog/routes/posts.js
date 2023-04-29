const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /posts     all post or all post of specific author
//   eg: GET /posts?author=xxx
router.get('/', function (req, res, next) {
  res.send('mainpage')
})

// POST /posts/create     draft post
router.post('/create', checkLogin, function (req, res, next) {
  res.send('draft post')
})

// GET /posts/create    page to draft post
router.get('/create', checkLogin, function (req, res, next) {
  res.send('page to draft post')
})

// GET /posts/:postId   post detail
router.get('/:postId', function (req, res, next) {
  res.send('post detail')
})

// GET /posts/:postId/edit    page to update post
router.get('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('page to update post')
})

// POST /posts/:postId/edit     update post
router.post('/:postId/edit', checkLogin, function (req, res, next) {
  res.send('update post')
})

// GET /posts/:postId/remove    delete post
router.get('/:postId/remove', checkLogin, function (req, res, next) {
  res.send('delete post')
})

module.exports = router
