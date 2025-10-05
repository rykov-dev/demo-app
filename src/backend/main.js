import express from "express";
import { getAllProjects } from './methods.js';

const { PORT: port = 3000 } = process.env;
const app = express();

app
.get("/", (req, res) => {
   res.send({
      status: "ok"
   })
})
.get("/project", async (req, res) => {
   const projects = await getAllProjects();

   res.json(projects);
});

app.listen(port, () => {
   console.info(`Server started.`);
});

