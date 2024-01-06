const express = require("express");
const router = express.Router();
const CodeBlock = require("./models");

//GET all code blocks
router.get("/", async (req, res) => {
  try {
    const codeBlocks = await CodeBlock.find();
    res.json(codeBlocks);
  } catch {
    console.log("error");
  }
});

//GET code block by ID
router.get("/:_id", async (req, res) => {
  try {
    const codeBlock = await CodeBlock.findById(req.params);
    res.json(codeBlock);
  } catch {
    console.log(req.params);
    console.log("error");
  }
});

module.exports = router;
