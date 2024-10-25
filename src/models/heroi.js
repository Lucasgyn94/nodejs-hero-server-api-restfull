export class Heroi {
    constructor(name, age, attackStrategy) {
        if (this.constructor === Heroi) {
            throw new Error('Heroi é uma classe abstrata e não pode ser instanciada diretamente.');
        }
        this.id = null;
        this.name = name;
        this.age = age;
        this.attackStrategy = attackStrategy;
    }

    attack() {
        return `O tipo ${this.constructor.name} atacou utilizando ${this.attackStrategy.execute()}!`;
    }

    attackMessage() {
        return `O héroi ${this.name} ganhou um poder de ataque: ${this.attackStrategy.execute()} `;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            type: this.constructor.name,
            attackStrategy: this.attackStrategy.execute()
        }
    }
}
