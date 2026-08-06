const express = require("express");
const cors = require("cors");
const peliculasRoutes = require("./routes/peliculasRoutes");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de peliculas funcionando"

    });
});
app.use("/api/peliculas", peliculasRoutes);
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); 