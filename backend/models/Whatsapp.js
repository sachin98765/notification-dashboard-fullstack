const mongoose = require("mongoose");

const WhatsAppSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhatsApp", WhatsAppSchema);
