import { ComparableInterface } from './note.model';

export class Color implements ComparableInterface {
    private _name: string;
    private _rgb: string;

    constructor(name: string, rgb: string) {
        this._name = name;
        this._rgb = rgb;
    }

    get name(): string {
        return this._name;
    }

    get rgb(): string {
        return this._rgb;
    }

    isEqual(item: Color) {
        return this._name === item.name && this._rgb == item.rgb;
    }
}