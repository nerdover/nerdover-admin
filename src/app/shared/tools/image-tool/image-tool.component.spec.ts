import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToolComponent } from './image-tool.component';

describe('ImageToolComponent', () => {
  let component: ImageToolComponent;
  let fixture: ComponentFixture<ImageToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
