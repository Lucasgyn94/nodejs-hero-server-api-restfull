import { Guerreiro } from '../models/guerreiro.js';
import { Mago } from '../models/mago.js';
import { Monje } from '../models/monje.js';
import { Ninja } from '../models/ninja.js';

export class HeroiFactory {
    static create(type, name, age) {
        switch (type.toLowerCase()) {
            case 'guerreiro':
                return new Guerreiro(name, age);
            case 'mago':
                return new Mago(name, age);
            case 'monje':
                return new Monje(name, age);
            case 'ninja':
                return new Ninja(name, age);
            default:
                throw new Error('Tipo de herói não reconhecido');
        }
    }
}
