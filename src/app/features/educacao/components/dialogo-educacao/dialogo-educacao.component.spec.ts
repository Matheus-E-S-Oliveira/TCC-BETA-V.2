import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEducacaoComponent } from './dialogo-educacao.component';

describe('DialogoEducacaoComponent', () => {
  let component: DialogoEducacaoComponent;
  let fixture: ComponentFixture<DialogoEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoEducacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
