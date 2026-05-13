const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // 👈 ESTA LÍNEA ES CLAVE

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ mensaje: "Hola mundo desde Render 🚀" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en puerto ${PORT}`);
});