const express = require("express");
const router = express.Router();
const CodeBlock = require("./models");

router.get("/", async (req, res) => {
  try {
    const codeBlocks = await CodeBlock.find();
    res.json(codeBlocks);
  } catch {
    console.log("error");
  }
});

module.exports = router;
