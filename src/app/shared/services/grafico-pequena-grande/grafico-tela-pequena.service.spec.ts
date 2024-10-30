import { TestBed } from '@angular/core/testing';

import { GraficoTelaPequenaService } from './grafio-tela-pequena.service';

describe('GrafioTelaPequenaServiceService', () => {
  let service: GraficoTelaPequenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoTelaPequenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
