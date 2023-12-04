const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_BASE_WEATHER = process.env.API_BASE_WEATHER;
const API_KEY_WEATHER = process.env.API_KEY_WEATHER;

router.get("/", async (req, res) => {
  try {
    const apiRes = await needle("get", `${API_BASE_WEATHER}${API_KEY_WEATHER}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
