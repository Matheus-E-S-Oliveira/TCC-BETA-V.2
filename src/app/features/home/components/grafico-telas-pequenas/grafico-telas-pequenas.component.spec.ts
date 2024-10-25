import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTelasPequenasComponent } from './grafico-telas-pequenas.component';

describe('GraficoTelasPequenasComponent', () => {
  let component: GraficoTelasPequenasComponent;
  let fixture: ComponentFixture<GraficoTelasPequenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoTelasPequenasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTelasPequenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
