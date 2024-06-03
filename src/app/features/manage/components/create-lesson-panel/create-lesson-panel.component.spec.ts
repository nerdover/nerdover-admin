import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLessonPanelComponent } from './create-lesson-panel.component';

describe('CreateLessonPanelComponent', () => {
  let component: CreateLessonPanelComponent;
  let fixture: ComponentFixture<CreateLessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLessonPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
