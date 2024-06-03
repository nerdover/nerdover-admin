import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLessonPanelComponent } from './update-lesson-panel.component';

describe('UpdateLessonPanelComponent', () => {
  let component: UpdateLessonPanelComponent;
  let fixture: ComponentFixture<UpdateLessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLessonPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
