import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandlineToolComponent } from './commandline-tool.component';

describe('CommandlineToolComponent', () => {
  let component: CommandlineToolComponent;
  let fixture: ComponentFixture<CommandlineToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandlineToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandlineToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
