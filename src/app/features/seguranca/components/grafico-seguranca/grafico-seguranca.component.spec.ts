import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSegurancaComponent } from './grafico-seguranca.component';

describe('GraficoSegurancaComponent', () => {
  let component: GraficoSegurancaComponent;
  let fixture: ComponentFixture<GraficoSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSegurancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
