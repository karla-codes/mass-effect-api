const mongoose = require("mongoose")

const entrySchema = new mongoose.Schema({
  title: String,
  content: [String],
  subject: {
    _id: Number,
    name: String,
  },
  category: {
    name: String,
  },
})

const Entry = mongoose.model("Entry", entrySchema)

module.exports = Entry
