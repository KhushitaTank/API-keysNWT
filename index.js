const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/news", require("./Routes/News"));

//app.use("/movies", require("./Routes/Movies"));

app.use("/weather", require("./Routes/Weather"));

app.use("/movieGenre", require("./Routes/movieGenre"));

app.use("/movieList", require("./Routes/movieList"));

app.use(
  cors({
    credentials: true,
    origin: "https://super-app-three-sepia.vercel.app",
  })
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
