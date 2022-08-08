import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

// handler function to wrap each route
const asyncHandler = (cb: any) => {
  return async (req: any, res: any, next: any) => {
    try {
      await cb(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

// API Routes

// GET all entries
router.get(
  "/entries/all",
  asyncHandler(async (req: any, res: any) => {
    const entries = await prisma.entry.findMany()
    res.status(200).json(entries)
  })
)

// GET all entries in the Primary (1) category
router.get(
  "/entries/primary",
  asyncHandler(async (req: any, res: any) => {
    const primaryEntries = await prisma.entry.findMany({
      where: {
        categoryId: 1,
      },
    })
    res.status(200).json(primaryEntries)
  })
)

// GET all entries in the Secondary (2) category
router.get(
  "/entries/secondary",
  asyncHandler(async (req: any, res: any) => {
    const secondaryEntries = await prisma.entry.findMany({
      where: {
        categoryId: 2,
      },
    })
    res.status(200).json(secondaryEntries)
  })
)

// GET all entries from a specific subject
router.get(
  "/entries/subject/:id",
  asyncHandler(async (req: any, res: any) => {
    const subjectEntries = await prisma.entry.findMany({
      where: {
        subjectId: parseInt(req.params.id),
      },
    })
    res.status(200).json(subjectEntries)
  })
)

// GET all entries from a specific subject in the Primary (1) category
router.get(
  "/entries/primary/subject/:id",
  asyncHandler(async (req: any, res: any) => {
    const entries = await prisma.entry.findMany({
      where: {
        AND: [
          {
            categoryId: 1,
          },
          {
            subjectId: parseInt(req.params.id),
          },
        ],
      },
    })

    if (entries.length >= 1) {
      res.status(200).json(entries)
    } else {
      res.status(404).json({
        message: "No entries found",
      })
    }
  })
)

// GET all entries from a specific subject in the Secondary (2) category
router.get(
  "/entries/secondary/subject/:id",
  asyncHandler(async (req: any, res: any) => {
    const entries = await prisma.entry.findMany({
      where: {
        AND: [
          {
            categoryId: 2,
          },
          {
            subjectId: parseInt(req.params.id),
          },
        ],
      },
    })

    if (entries.length >= 1) {
      res.status(200).json(entries)
    } else {
      res.status(404).json({
        message: "No entries found",
      })
    }
  })
)

export default router
