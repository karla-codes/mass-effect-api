import { PrismaClient } from "@prisma/client"
import express from "express"

const prisma = new PrismaClient()
const app = express()

async function main() {}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())

// middleware
app.use(express.json())

// port connection
const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Listening on port: ${port}`))
