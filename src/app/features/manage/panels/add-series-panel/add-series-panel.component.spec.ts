import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeriesPanelComponent } from './add-series-panel.component';

describe('AddSeriesPanelComponent', () => {
  let component: AddSeriesPanelComponent;
  let fixture: ComponentFixture<AddSeriesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeriesPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeriesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
