import { Heroi } from './heroi.js';
import { AtaqueNinjutsu } from '../strategies/ataqueNinjutsu.js';

export class Ninja extends Heroi {
    constructor(name, age) {
        super(name, age, new AtaqueNinjutsu());
    }
}
