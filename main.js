class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        switch (this.tipo) {
            case "Mago":
                return console.log(`O ${this.tipo} atacou usando magia`);
                break;
            case "Guerreiro":
                return console.log(`O ${this.tipo} atacou usando espada`);
                break;
            case "Monge":
                return console.log(`O ${this.tipo} atacou usando artes marciais`);
                break;
            case "Ninja":
                return console.log(`O ${this.tipo} atacou usando shuriken`);
                break;
        }
    }
}

let heroi = new Hero("Heimmel", "32", "Guerreiro");
let heroi2 = new Hero("Briene", "25", "Mago");
heroi.atacar();
heroi2.atacar();