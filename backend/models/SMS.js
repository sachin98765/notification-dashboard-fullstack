const mongoose = require("mongoose");

const SMSSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SMS", SMSSchema);
