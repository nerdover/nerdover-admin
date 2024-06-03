import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryPanelComponent } from './create-category-panel.component';

describe('CreateCategoryPanelComponent', () => {
  let component: CreateCategoryPanelComponent;
  let fixture: ComponentFixture<CreateCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
