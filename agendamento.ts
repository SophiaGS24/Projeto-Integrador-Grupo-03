import { User } from "./user";
import { Intercambio } from "./Intercambio";
import { Servico } from "./servico";

export class Agendamento {
    constructor(
        private id: string,
        private usuario: User,
        private intercambio: Intercambio,
        private servico: Servico,
        private dataHora: Date,
    ){
        if (!usuario) throw new Error("usuario obrigatorio");
        if (!intercambio) throw new Error("intercambio obrigatório");
        if (!servico) throw new Error("servico obrigatório");
        if (!dataHora) throw new Error("dataHora obrigatório");
    }

    static create(cliente: User, intercambio: Intercambio, servico: Servico, dataHora: Date) {
        const id = crypto.randomUUID();
        return new Agendamento(id, cliente, intercambio, servico, dataHora);
    }

    getId(): string {
        return this.id;        
    }
    
    getUsuario(): User {
        return this.usuario;
    }
    getIntercambio(): Intercambio {
        return this.intercambio;
    }
    
    getServico(): Servico{
        return this.servico;
    }

    getDataHora(): Date{
        return this.dataHora;
    }
}