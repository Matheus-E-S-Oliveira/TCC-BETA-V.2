import { TestBed } from '@angular/core/testing';

import { GraficoTelaGrandeService} from './grafico-tela-grande.service';

describe('GrafioTelaGrandeServiceService', () => {
  let service: GraficoTelaGrandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoTelaGrandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
