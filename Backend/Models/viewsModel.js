const mongoose = require("mongoose")

const views = mongoose.Schema({
  count: {
    type: Number,

    default: 0,
  }
})
module.exports = mongoose.model("views", views)