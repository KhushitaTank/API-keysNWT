const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const apiRes = await needle(
      "get",
      `${API_BASE_URL}${API_KEY_NAME}=${API_KEY_VALUE}`
    );
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
