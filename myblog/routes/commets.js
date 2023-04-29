const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// POST /comments     draft a comment
router.post('/', checkLogin, function (req, res, next) {
  res.send('draft comment')
})

// GET /comments/:commentId/remove    delete a comment
router.get('/:commentId/remove', checkLogin, function (req, res, next) {
  res.send('delete comment')
})

module.exports = router
