import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeriesLessonPageComponent } from './edit-series-lesson-page.component';

describe('EditSeriesLessonPageComponent', () => {
  let component: EditSeriesLessonPageComponent;
  let fixture: ComponentFixture<EditSeriesLessonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSeriesLessonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSeriesLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
