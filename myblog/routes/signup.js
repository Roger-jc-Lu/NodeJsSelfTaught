const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup    signup page
router.get('/', checkNotLogin, function (req, res, next) {
  res.send('signup page')
})

// POST /signup     signup
router.post('/', checkNotLogin, function (req, res, next) {
  res.send('signup')
})

module.exports = router
