const express = require("express")
const Entry = require("../models/entry")
const router = express.Router()
const subjects = require("../data/subjects")

// handler function to wrap each route
const asyncHandler = cb => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

// finds matching subject entries
const findSubjectEntries = async (req, res, category) => {
  const subjectId = parseInt(req.params.subjectId)
  const subject = subjects.find(subject => subject.id === subjectId)

  if (subject) {
    const subjectName = subject.name

    const entries = await Entry.find({
      category: { name: category },
      subject: {
        _id: subjectId,
        name: subjectName,
      },
    })

    if (entries.length >= 1) {
      res.status(200).json(entries)
    } else {
      res.status(404).json({
        message: "No entries found",
      })
    }
  } else {
    res.status(404).json({
      message: "No entries found",
    })
  }
}

// API Routes

// GET all entries
router.get(
  "/entries/all",
  asyncHandler(async (req, res) => {
    const entries = await Entry.find()
    res.status(200).json(entries)
  })
)

// GET all entries in the Primary category
router.get(
  "/entries/primary",
  asyncHandler(async (req, res) => {
    const primaryEntries = await Entry.find({
      category: {
        name: "Primary",
      },
    })
    res.status(200).json(primaryEntries)
  })
)

// GET all entries in the Secondary  category
router.get(
  "/entries/secondary",
  asyncHandler(async (req, res) => {
    const secondaryEntries = await Entry.find({
      category: {
        name: "Secondary",
      },
    })
    res.status(200).json(secondaryEntries)
  })
)

// GET all entries from a specific subject
router.get(
  "/entries/:subjectId",
  asyncHandler(async (req, res) => {
    const subjectId = parseInt(req.params.subjectId)
    const subject = subjects.find(subject => subject.id === subjectId)

    if (subject) {
      const subjectName = subject.name

      const subjectEntries = await Entry.find({
        subject: {
          _id: subjectId,
          name: subjectName,
        },
      })
      res.status(200).json(subjectEntries)
    } else {
      res.status(404).json({
        message: "No entries found",
      })
    }
  })
)

// GET all entries from a specific subject in the Primary category
router.get(
  "/entries/primary/:subjectId",
  asyncHandler(async (req, res) => {
    findSubjectEntries(req, res, "Primary")
  })
)

// GET all entries from a specific subject in the Secondary category
router.get(
  "/entries/secondary/:subjectId",
  asyncHandler(async (req, res) => {
    findSubjectEntries(req, res, "Secondary")
  })
)

module.exports = router
