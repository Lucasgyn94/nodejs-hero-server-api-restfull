export class Database {
    static #heroes = new Map();

    static save(hero) {
        this.#heroes.set(hero.id, hero);
        return hero;
    }

    static findAll() {
        return Array.from(this.#heroes.values());
    }

    static findById(id) {
        return this.#heroes.get(id);
    }

    static update(id, updatedData) {
        const hero = this.#heroes.get(id);
        if (!hero) return null;

        const updatedHero = { ...hero, ...updatedData };
        this.#heroes.set(id, updatedHero);
        return updatedHero;
    }

    static delete(id) {
        return this.#heroes.delete(id);
    }
}
