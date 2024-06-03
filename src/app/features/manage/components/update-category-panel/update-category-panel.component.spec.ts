import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryPanelComponent } from './update-category-panel.component';

describe('UpdateCategoryPanelComponent', () => {
  let component: UpdateCategoryPanelComponent;
  let fixture: ComponentFixture<UpdateCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCategoryPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
