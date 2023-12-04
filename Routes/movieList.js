const url = require("url");

const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_BASE_URL_MOVIELIST = process.env.API_BASE_URL_MOVIELIST;
const API_KEY_MOVIELIST = process.env.API_KEY_MOVIELIST;
const API_KEY_VALUE_MOVIELIST = process.env.API_KEY_VALUE_MOVIELIST;

router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const params = new URLSearchParams({
      [API_KEY_MOVIELIST]: API_KEY_VALUE_MOVIELIST,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle("get", `${API_BASE_URL_MOVIELIST}${params}`);

    const data = apiRes.body;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
