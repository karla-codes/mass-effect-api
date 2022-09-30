require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require("cors")

const mongoDB = process.env.MONGODB_URI

// mongoDB connection
mongoose.connect(mongoDB)
const db = mongoose.connection

// handle mongoDB conection error
db.on("error", err => {
  console.log(err)
})

const app = express()

// middleware
app.use(express.json())
app.use(cors)

// set up '/api' route
// (makes it so that you must include '/api' before any route)
app.use("/api", routes)

// greeting set at root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Mass Effect Codex API!",
  })
})

// sends a 404 error message if no other routes match
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  })
})

// global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message,
    },
  })
})

// port connection
const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Listening on port: ${port}`))
