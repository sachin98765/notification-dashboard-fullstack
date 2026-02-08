require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");
const smsRoutes = require("./routes/smsRoutes");
const whatsappRoutes = require("./routes/whatsappRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.log(err));

app.use("/api/emails", emailRoutes);
app.use("/api/sms", smsRoutes);
app.use("/api/whatsapp", whatsappRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
