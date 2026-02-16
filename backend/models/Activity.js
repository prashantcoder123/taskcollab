const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema(
  {
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    action: {
      type: String
    },
    details: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Activity", activitySchema)
