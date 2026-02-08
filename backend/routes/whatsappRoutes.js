const router = require("express").Router();
const WhatsApp = require("../models/Whatsapp");

// CREATE
router.post("/", async (req, res) => {
  const whatsapp = await WhatsApp.create(req.body);
  res.json(whatsapp);
});

// READ
router.get("/", async (req, res) => {
  const data = await WhatsApp.find().sort({ createdAt: -1 });
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await WhatsApp.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await WhatsApp.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
