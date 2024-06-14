import express from "express";
import cors from "cors";
import conectaNoDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNoDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao feita com sucesso");
});

const app = express();
//app.use(cors());
app.use(cors({ origin: 'http://localhost:4200' }));
routes(app);

export default app;