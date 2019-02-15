import { Note } from "./note.model";
import { Repository } from './repository';
import { Color } from './color.model';

describe('Repository', () => {
    let repository: Repository;
    beforeEach(() => {
        repository = new Repository();
    });
       
    it('should add a note', () => {
        repository.add(new Note(null, 'title', new Color('colorName', '#f00')));
        repository.items$.subscribe((notes: Note[]) => {
            expect(notes.length).toEqual(1);
            expect(notes[0].id).toEqual(1);
        });
      });
    
      it('should remove a note', () => {
        const firstNote = new Note(1, 'title', new Color('colorName', '#f00'));
        const secondNote = new Note(2, 'title', new Color('colorName', '#f00'));
        repository.add(firstNote);
        repository.add(secondNote);
        repository.remove(secondNote);
        repository.items$.subscribe((notes: Note[]) => {
          expect(notes.length).toEqual(1);
          expect(notes[0]).toEqual(firstNote);
        });
      });
    
      it('should update a note title', () => {
        const note = new Note(1, 'title', new Color('colorName', '#f00'));
        repository.add(note);
        note.title = 'new title';
        repository.update(note);
        repository.items$.subscribe((notes: Note[]) => {
          expect(notes.length).toEqual(1);
          expect(notes[0].title).toEqual('new title');
        });
      });
});