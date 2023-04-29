const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout     signout
router.get('/', checkLogin, function (req, res, next) {
  res.send('signout')
})

module.exports = router
