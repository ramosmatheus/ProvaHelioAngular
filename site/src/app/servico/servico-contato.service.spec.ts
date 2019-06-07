import { TestBed } from '@angular/core/testing';

import { ServicoContatoService } from './servico-contato.service';

describe('ServicoContatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoContatoService = TestBed.get(ServicoContatoService);
    expect(service).toBeTruthy();
  });
});
