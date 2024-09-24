import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphToolComponent } from './paragraph-tool.component';

describe('ParagraphToolComponent', () => {
  let component: ParagraphToolComponent;
  let fixture: ComponentFixture<ParagraphToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
