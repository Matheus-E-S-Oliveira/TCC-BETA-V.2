import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTelasGrandesComponent } from './grafico-telas-grandes.component';

describe('GraficoTelasGrandesComponent', () => {
  let component: GraficoTelasGrandesComponent;
  let fixture: ComponentFixture<GraficoTelasGrandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoTelasGrandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTelasGrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
