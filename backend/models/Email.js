const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    emailTo: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", EmailSchema);
