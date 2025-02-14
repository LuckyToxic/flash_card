const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");

const { PORT } = process.env;
const app = express();

serverConfig(app);
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at port - ${PORT}`);
});
