import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Note } from 'src/app/note.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  mouseEntered = false;
  @Input()
  item: Note;

  @Output()
  editClicked = new EventEmitter<Note>();

  @Output()
  deleteClicked = new EventEmitter<Note>();

  @HostListener('mouseenter')
  onMouseEnter() {
    this.mouseEntered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseEntered = false;
  }

  onEditClicked(note: Note) {
    this.editClicked.emit(note);
  }

  onDeleteClicked(note: Note) {
    this.deleteClicked.emit(note);
  }

}
