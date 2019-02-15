import { Note } from "./note.model";
import { Color } from './color.model';

describe('NoteModel', () => {
    it('should create a note', () => {
        const now = new Date();
        const note = new Note(1, 'title', new Color('colorName', '#f0f'), 'description');

        expect(note.id).toBe(1);
        expect(note.title).toBe('title');
        expect(note.description).toBe('description');
        expect(note.color.name).toBe('colorName');
        expect(note.color.rgb).toBe('#f0f');
        expect(note.created.getTime()).toBeGreaterThanOrEqual(now.getTime());
    });

    it('should compare same note as equal', () => {
        const note = new Note(1, 'title1', new Color('colorName', '#f0f'));
        expect(note.isEqual(note)).toBeTruthy();
    });

    it('should update title', () => {
        const note = new Note(1, 'title1', new Color('colorName', '#f0f'));
        note.title = 'title2';
        expect(note.title).toEqual('title2');
    });

    it('should compare two note as not equal', () => {
        const firstNote = new Note(1, 'title1', new Color('colorName1', '#f0f'));
        const secondNote = new Note(2, 'title2', new Color('colorName2', '#fff'));
        expect(firstNote.isEqual(secondNote)).toBeFalsy();
    });
});