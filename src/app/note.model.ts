import { Color } from './color.model';
import { Clonable } from './repository';

export class NoteInterface {
    id?: number;
    title?: string;
    color?: Color;
    description?: string;
    created?: Date;
}

export interface ComparableInterface {
    isEqual(item): boolean;
}

export class Note implements NoteInterface, Clonable, ComparableInterface {
    private _id: number;
    private _title: string;
    private _color: Color;
    private _description: string;
    private _created: Date;

    constructor(id: number, title: string, color: Color, description?:string) {
        this._id = id;
        this._title = title;
        this._color = color;
        this._description = description;
        this._created = new Date();
    }

    clone(id, item: NoteInterface) {
        return new Note(id, item.title, item.color, item.description);
    }
    
    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get color(): Color {
        return this._color;
    }

    get description(): string {
        return this._description;
    }

    get created(): Date {
        return this._created;
    }

    isEqual(note: Note) {
        return this._id === note.id;
    }
}