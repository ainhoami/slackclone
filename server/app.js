const createError = require("http-errors")
const express = require("express")
const userRouter = require("./routes/users")
const protectedRouter = require("./routes/protected")
const jwt = require("express-jwt")
const config = require("config")
const app = express()
const server = require("http").Server(app)
// const http = require("http")
// const server = http.createServer(app)
const io = require("socket.io")(server)
// const chat = require("./chat")(io)
require("./chat")(io)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", userRouter)
app.use("/", jwt({ secret: config.get("secret") }), protectedRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

server.listen(8080, () => {
  console.log("Listening on port 8080")
})



















// const createError = require("http-errors")
// const express = require("express")
// const userRouter = require("./routes/users")
// const app = express()
// const protectedRouter=require('./routes/protected') // route para login
// const jwt = require ('express-jwt') // middleware
// const config = require('config') //it'll look into config folder for the default.json

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.use("/", userRouter)
// app.use("/", jwt({secret: config.get('secret')}), protectedRouter) //secret viene de config/default.json
// //it's what jwt is going to use to create the token with that screen and send back to the user

// // app.use("/protected", protectedRouter) //it has to go to protected first

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404))
// })

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get("env") === "development" ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.json({
//     status: err.status,
//     error: err
//   })
// })

// app.listen(8080, () => {
//   console.log("Listening on port 8080")
// })
