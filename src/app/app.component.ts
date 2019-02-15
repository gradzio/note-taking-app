import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note, NoteInterface } from './note.model';
import { Repository } from './repository';
import { Color } from './color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards-component';
  notes$ = this.repository.items$;

  currentNote = this.nullNote;

  constructor(private repository: Repository) {
    this.repository.add(new Note(1, 'Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. Less text here. v Less text here. Less text here.', new Color('Red', '#ff6962')));
  }

  get nullNote(): NoteInterface {
    return {id: null, title: null, color: null};
  }

  onFormItemCreated(note: Note) {
    this.repository.add(note);
    this.currentNote = this.nullNote;
  }

  onFormItemUpdated(note: Note) {
    this.repository.update(note);
    this.currentNote = this.nullNote;
  }

  onEditNoteClicked(note: Note) {
    this.currentNote = note.clone(note.id, note);
  }

  onDeleteNoteClicked(note: Note) {
    this.repository.remove(note);
    this.currentNote = this.nullNote;
  }
}
