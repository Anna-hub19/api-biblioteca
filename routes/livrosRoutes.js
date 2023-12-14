import express from "express";
import LivroController from "../controller/livrosController.js";


const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);


export default routes