const path = require("path")
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)


// // middleware
// const express = require('express')
// const app = express()

// app.use(function (req, res, next) {
//   console.log('1')
//   next(new Error('haha'))
// //   next()
// })

// app.use(function (req, res, next) {
//   console.log('2')
//   res.status(200).end()
// })

// // Error handling
// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

// app.listen(3000)