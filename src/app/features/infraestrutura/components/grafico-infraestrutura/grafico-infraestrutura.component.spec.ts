import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoInfraestruturaComponent } from './grafico-infraestrutura.component';

describe('GraficoInfraestruturaComponent', () => {
  let component: GraficoInfraestruturaComponent;
  let fixture: ComponentFixture<GraficoInfraestruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoInfraestruturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoInfraestruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
