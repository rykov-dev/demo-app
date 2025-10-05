const express = require("express");

const { PORT: port = 3000, HOST: host = '127.0.0.1' } = process.env;
const app = express();

app.get("/", (req, res) => {
   res.send({
      status: "ok"
   })
});

app.listen(port, host, () => {
   console.info(`Server started.`);
});

