export class Intercambio {
    constructor(
        private id: string,
        private nome: string,
        private diasViagem: string [],
        private diaInicio: string,
        private diaFim: string 
    ) {
        if (!nome) throw new Error("nome obrigatório");
        if (!diasViagem || diasViagem.length === 0) throw new Error("diasViagem obrigatório");
        if (!diaInicio) throw new Error("diaInicio obrigatório");
        if (!diaFim) throw new Error("diaFim obrigatório");

        if (nome.length < 3) throw new Error("nome muito curto");
        }

        static create(nome: string, diasViagem:string[], diaInicio: string, diaFim: string) {
            const id = crypto.randomUUID();
            return new Intercambio(id, nome, diasViagem, diaInicio, diaFim);
        }

        getNome(): string {
            return this.nome;
        }

        getdiasViagem(): string[] {
            return this.diasViagem;
        }

        getdiaInicio(): string {
            return this.diaInicio;
        }

        getdiaFim(): string {
            return this.diaFim;
        }
    }