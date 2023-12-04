const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_KEY_GENER = process.env.API_KEY_GENER;

router.get("/", async (req, res) => {
  try {
    const apiRes = await needle("get", `${API_KEY_GENER}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;