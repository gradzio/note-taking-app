import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormComponent } from './note-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Note } from 'src/app/note.model';
import { Color } from 'src/app/color.model';

describe('NoteFormComponent', () => {
  let component: NoteFormComponent;
  let fixture: ComponentFixture<NoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain colors', () => {
    expect(component.colors.length).toBeGreaterThan(0);
  });

  it('should not have model by default', () => {
    expect(component.item).toBeTruthy();
    expect(component.item.id).toBeFalsy();
  });

  it('should display input with placeholder', () => {
    let inputDebugElement = fixture.debugElement.query(By.css('input'));

    expect(inputDebugElement.nativeElement.getAttribute('placeholder')).toEqual('Note Text');
  });

  it('should display select with color options', () => {
    let selectHeaderDebugElement = fixture.debugElement.query(By.css('.mat-select-value'));
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click();
    fixture.detectChanges();

    let selectOptionsDebugElements = fixture.debugElement.queryAll(By.css('.mat-option'));

    expect(selectHeaderDebugElement.nativeElement.textContent.trim()).toEqual('Note Color');
    expect(selectOptionsDebugElements.length).toEqual(component.colors.length);
  });

  it('should display button with label', () => {
    let buttonDebugElement = fixture.debugElement.query(By.css('button'));

    expect(buttonDebugElement.nativeElement.classList.contains('mat-primary')).toBe(true);
    expect(buttonDebugElement.nativeElement.textContent.trim()).toEqual('Add Note');
  });
});

describe('NoteFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormComponent, ComponentWithNoteForm ],
        imports: [
          BrowserAnimationsModule,
          FormsModule,
          ReactiveFormsModule,
          MaterialModule
        ]
    }).compileComponents();
  }));
  it('should inject note', () => {
    const withItemFixture = TestBed.createComponent(ComponentWithNoteForm);
    const withItemNoteForm = withItemFixture.componentInstance.noteForm;

    withItemFixture.detectChanges();

    expect(withItemNoteForm.item).toBeTruthy();
    expect(withItemNoteForm.item.id).toBeTruthy();
    expect(withItemNoteForm.item.title).toEqual('title');
    expect(withItemNoteForm.item.color.name).toEqual('colorName');
    expect(withItemNoteForm.item.color.rgb).toEqual('#fff');
  });
});

@Component({
  template: `
  <app-note-form [item]="note"></app-note-form>
  `
})
class ComponentWithNoteForm {
  note = new Note(1, 'title', new Color('colorName', '#fff'));
  @ViewChild(NoteFormComponent) noteForm: NoteFormComponent;
}
