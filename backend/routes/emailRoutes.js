const router = require("express").Router();
const Email = require("../models/Email");

router.post("/", async (req, res) => {
  const email = await Email.create(req.body);
  res.json(email);
});

router.get("/", async (req, res) => {
  res.json(await Email.find().sort({ createdAt: -1 }));
});

router.put("/:id", async (req, res) => {
  res.json(
    await Email.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

router.delete("/:id", async (req, res) => {
  await Email.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
