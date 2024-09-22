import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeriesLessonPanelComponent } from './add-series-lesson-panel.component';

describe('AddSeriesLessonPanelComponent', () => {
  let component: AddSeriesLessonPanelComponent;
  let fixture: ComponentFixture<AddSeriesLessonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeriesLessonPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeriesLessonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
