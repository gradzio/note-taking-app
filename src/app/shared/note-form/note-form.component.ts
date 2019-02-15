import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Note, NoteInterface, ComparableInterface } from 'src/app/note.model';
import { Color } from 'src/app/color.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent {

  @Output()
  created = new EventEmitter<Note>();

  @Output()
  updated = new EventEmitter<Note>();

  colors = [
    new Color('Red', '#ff6962'),
    new Color('Blue', '#2faffb'),
    new Color('Green', '#98d698'),
    new Color('Cyan', '#00bcd4'),
    new Color('Purple', '#dc7fdc'),
    new Color('Orange', '#f78360')
  ];

  @Input()
  item:NoteInterface;

  @ViewChild('noteForm') noteForm: NgForm;

  onSubmit() {
    if (this.item.id) {
      this.updated.emit(new Note(this.item.id, this.item.title, this.noteForm.value.color, this.item.description));
    } else {
      this.created.emit(new Note(null, this.item.title, this.item.color, this.item.description));
    }
    this.noteForm.reset();
  }

  compareOptions(o1: ComparableInterface, o2: ComparableInterface): boolean {
    return o1 && o2 && o1.isEqual(o2);
  }
}
