import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoSaudeComponent } from './dialogo-saude.component';

describe('DialogoSaudeComponent', () => {
  let component: DialogoSaudeComponent;
  let fixture: ComponentFixture<DialogoSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoSaudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
