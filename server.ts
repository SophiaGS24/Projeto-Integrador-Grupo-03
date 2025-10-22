import express from "express";
import { UserController } from "./controller/user";
import { ServicoController  } from "./controller/servico";
import { IntercambioController } from "./controller/intercambio";
import { AgendamentoController } from "./controller/agendamento";

export const app = express();

// Configuração de CORS
app.use((req, res, next) > {
    res.header("Access-Control-Allow-Origin", "*"); // Permite todas as origens
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Controll-Allow-Headers", "Content-Type, Authorization"):

    // Responde requisições OPTION (preflight)
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();

});

app.use(express.json());

UserController();
ServicoController();
IntercambioController();
AgendamentoController();

app.listen(3000, () > {
    console.log("Server is running on port 3000");
});
