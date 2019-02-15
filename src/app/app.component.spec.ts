import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Note } from './note.model';
import { Repository } from './repository';
import { NoteFormComponent } from './shared/note-form/note-form.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture, app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NoteFormComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        Repository
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cards-component'`, () => {
    expect(app.title).toEqual('cards-component');
  });

  it('should have empty notes by default', () => {
    app.notes$.subscribe((notes: Note[]) => expect(notes.length).toEqual(0));
  });
});
