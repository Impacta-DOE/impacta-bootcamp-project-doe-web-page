
export class DadosContato {

    email: string;
    telefone: string;
    id: number;

    constructor(id: number, email: string, telefone: string){
        this.id = id;
        this.email = email;
        this.telefone = telefone;
    }

}