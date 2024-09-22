import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLessonPanelComponent } from './add-lesson-panel.component';

describe('AddLessonPanelComponent', () => {
  let component: AddLessonPanelComponent;
  let fixture: ComponentFixture<AddLessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLessonPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
