import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSaudeComponent } from './grafico-saude.component';

describe('GraficoSaudeComponent', () => {
  let component: GraficoSaudeComponent;
  let fixture: ComponentFixture<GraficoSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoSaudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
