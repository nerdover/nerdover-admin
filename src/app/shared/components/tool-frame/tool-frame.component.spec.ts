import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFrameComponent } from './tool-frame.component';

describe('ToolFrameComponent', () => {
  let component: ToolFrameComponent;
  let fixture: ComponentFixture<ToolFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
