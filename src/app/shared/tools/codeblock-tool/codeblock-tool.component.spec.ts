import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockToolComponent } from './codeblock-tool.component';

describe('CodeblockToolComponent', () => {
  let component: CodeblockToolComponent;
  let fixture: ComponentFixture<CodeblockToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeblockToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeblockToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
