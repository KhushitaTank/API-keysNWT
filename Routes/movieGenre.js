const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_KEY_GENRE = process.env.API_KEY_GENRE;

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const apiRes = await needle("get", `${API_KEY_GENRE}`);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
