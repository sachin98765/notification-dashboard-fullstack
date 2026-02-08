const router = require("express").Router();
const SMS = require("../models/SMS");

// CREATE
router.post("/", async (req, res) => {
  const sms = await SMS.create(req.body);
  res.json(sms);
});

// READ
router.get("/", async (req, res) => {
  const data = await SMS.find().sort({ createdAt: -1 });
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await SMS.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await SMS.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
