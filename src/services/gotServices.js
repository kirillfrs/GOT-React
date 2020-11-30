export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResources('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const houses = await this.getResources('/houses/');
        return houses.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResources(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const books = await this.getResources(`/books/`);
        console.log(books);
        return books.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResources(`/books/${id}/`);
        return this._transformBook(book);
    }



    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name || 'no-data :(',
            gender: char.gender || 'no-data :(',
            born: char.born || 'no-data :(',
            died: char.died || 'no-data :(',
            culture: char.culture || 'no-data :('
        };
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: house.name || 'no-data :(',
            region: house.region || 'no-data :(',
            words: house.words || 'no-data :(',
            titles: house.titles || 'no-data :(',
            ancestralWeapons: house.ancestralWeapons || 'no-data :('
        };
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name || 'no-data :(',
            numberOfPages: book.numberOfPages || 'no-data :(',
            publisher: book.publisher || 'no-data :(',
            released: book.released || 'no-data :('
        };
    }
}