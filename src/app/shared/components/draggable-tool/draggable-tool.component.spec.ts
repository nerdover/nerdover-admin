import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableToolComponent } from './draggable-tool.component';

describe('DraggableToolComponent', () => {
  let component: DraggableToolComponent;
  let fixture: ComponentFixture<DraggableToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
