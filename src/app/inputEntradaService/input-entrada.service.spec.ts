import { TestBed } from '@angular/core/testing';

import { InputEntradaService } from './input-entrada.service';

describe('InputEntradaService', () => {
  let service: InputEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
