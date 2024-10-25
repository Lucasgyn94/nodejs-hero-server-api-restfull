import { Heroi } from './heroi.js';
import { AtaqueFuriaTigre } from '../strategies/ataqueFuriaTigre.js';

export class Monje extends Heroi {
    constructor(name, age) {
        super(name, age, new AtaqueFuriaTigre());
    }
}
