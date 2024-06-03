import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryPanelComponent } from './delete-category-panel.component';

describe('DeleteCategoryPanelComponent', () => {
  let component: DeleteCategoryPanelComponent;
  let fixture: ComponentFixture<DeleteCategoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCategoryPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCategoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
