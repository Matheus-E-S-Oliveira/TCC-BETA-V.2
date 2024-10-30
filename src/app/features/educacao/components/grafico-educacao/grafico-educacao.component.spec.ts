import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEducacaoComponent } from './grafico-educacao.component';

describe('GraficoEducacaoComponent', () => {
  let component: GraficoEducacaoComponent;
  let fixture: ComponentFixture<GraficoEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoEducacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
