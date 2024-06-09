import { TestBed } from '@angular/core/testing';

import { StatsPersonagemService } from './stats-personagem.service';

describe('StatsPersonagemService', () => {
  let service: StatsPersonagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsPersonagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
