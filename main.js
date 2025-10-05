const express = require("express");

const { PORT: port = 3000 } = process.env;
const app = express();

app.get("/", (req, res) => {
   res.send({
      status: "ok"
   })
});

app.listen(port, () => {
   console.info(`Server started.`);
});

