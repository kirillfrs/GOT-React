export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }
    async getAllCharacters() {
        const res = await this.getResources('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    async getAllHouses() {
        const houses = await this.getResources('/houses/');
        return houses.map(this._transformHouse);
    }

    async getHouse(id) {
        const house = await this.getResources(`/houses/${id}`);
        return this._transformHouse(house);
    }

    async getAllBooks() {
        const books = await this.getResources(`/books/`);
        return books.map(this._transformBook);
    }
    async getBook(id) {
        const book = await this.getResources(`/books/${id}/`);
        return this._transformBook(book);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender || ' no-data :(',
            born: char.born || 'no-data :(',
            died: char.died || 'no-data :(',
            culture: char.culture || 'no-data :('
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        };
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        };
    }
}
