import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoInfraestruturaComponent } from './dialogo-infraestrutura.component';

describe('DialogoInfraestruturaComponent', () => {
  let component: DialogoInfraestruturaComponent;
  let fixture: ComponentFixture<DialogoInfraestruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoInfraestruturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoInfraestruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
