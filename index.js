const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/news", require("./Routes"));

app.use(cors());
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
