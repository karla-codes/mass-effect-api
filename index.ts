const express = require("express")
const app = express()

// middleware
app.use(express.json())

// port connection
const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Listening on port: ${port}`))
