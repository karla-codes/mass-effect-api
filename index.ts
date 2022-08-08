import express from "express"

const app = express()

// middleware
app.use(express.json())

// import routes
import routes from "./routes"

// set up '/api' route
// (makes it so that you must include '/api' before any route)
app.use("/api", routes)

// greeting set at root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the (unofficial) Mass Effect Codex REST API!",
  })
})

// sends a 404 error message if no other routes match
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  })
})

// global error handler
app.use((err: any, req: any, res: any, next: any) => {
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
