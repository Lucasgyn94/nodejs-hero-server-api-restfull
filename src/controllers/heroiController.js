import { v4 as uuidv4 } from 'uuid';
import { HeroiFactory } from '../factories/heroiFactory.js';
import { Database } from '../config/database.js';

export class HeroiController {
    static createHero(req, res) {
        try {
            const { type, name, age } = req.body;
            if (!type || !name || !age) {
                return res.status(400).json({ error: 'Tipo, nome e idade são obrigatórios' });
            }
            const hero = HeroiFactory.create(type, name, age);
            hero.id = uuidv4();

            const heroSaved = Database.save(hero.toJSON());
            res.status(201).json(heroSaved);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static listHeroes(req, res) {
        const heroes = Database.findAll();
        res.json(heroes);
    }

    static findHeroById(req, res) {
        const hero = Database.findById(req.params.id);
        if (!hero) {
            return res.status(404).json({ error: 'Herói não encontrado' });
        }
        res.json(hero);
    }

    static updateHero(req, res) {
        try {
            const { id } = req.params;
            const { name, age } = req.body;

            if (!name && !age) {
                return res.status(400).json({ error: 'Nome ou idade devem ser fornecidos para atualização' });
            }

            const updatedHero = Database.update(id, { name, age });
            
            if (!updatedHero) {
                return res.status(404).json({ error: 'Herói não encontrado' });
            }

            res.json(updatedHero);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static deleteHero(req, res) {
        const deleted = Database.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Herói não encontrado' });
        }
        res.status(204).send();
    }
}
