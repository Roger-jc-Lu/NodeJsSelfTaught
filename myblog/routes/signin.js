const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signin    signin page
router.get('/', checkNotLogin, function (req, res, next) {
  res.send('signin page')
})

// POST /signin     signin
router.post('/', checkNotLogin, function (req, res, next) {
  res.send('signin')
})

module.exports = router
