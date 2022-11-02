import express from "express";
import cors from "cors";
import routerIndex from "./routes/index.routes.js";
import router from "./routes/tasks.routes.js";
const app = express();

// cors
// midleware comunicacion entre backend
app.use(cors());

// Router
// La función express.json() es una función de middleware integrada en Express. Analiza las solicitudes entrantes con cargas JSON
app.use(express.json());
app.use(routerIndex);
app.use("/api/tasks", router);

// Routing
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express. Cursos 💻.");
});

export default app;
