import { TestBed } from '@angular/core/testing';

import { ProficienciasService } from './proficiencias.service';

describe('ProficienciasService', () => {
  let service: ProficienciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProficienciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
