import { Heroi } from './heroi.js';
import { AtaqueEspada } from '../strategies/ataqueEspada.js';

export class Guerreiro extends Heroi {
    constructor(name, age) {
        super(name, age, new AtaqueEspada());
    }
}
