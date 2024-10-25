import { Heroi } from './heroi.js';
import { AtaqueMagia } from '../strategies/ataqueMagia.js';

export class Mago extends Heroi {
    constructor(name, age) {
        super(name, age, new AtaqueMagia());
    }
}
