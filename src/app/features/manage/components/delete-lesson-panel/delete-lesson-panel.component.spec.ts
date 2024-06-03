import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLessonPanelComponent } from './delete-lesson-panel.component';

describe('DeleteLessonPanelComponent', () => {
  let component: DeleteLessonPanelComponent;
  let fixture: ComponentFixture<DeleteLessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLessonPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
