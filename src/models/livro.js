import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: {
            type: String,
            required: [true, "O título do livro é obrigatório"]
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autores",
            required: [true, "O(a) autor(a) é obrigatório"]
        },
        editora: {
            type: String,
            required: [true, "A editora é obrigatória"]
        },
        numeroPaginas: { 
            type: Number,
            min:[10, "o numero de paginas esta menor do que o permitido"],
            max:[5000, "o numero de paginas esta maior do que o permitido"]
        }
    }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;