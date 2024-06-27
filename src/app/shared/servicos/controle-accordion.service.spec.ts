import { TestBed } from '@angular/core/testing';

import { ControleAccordionService } from './controle-accordion.service';

describe('ControleAccordionService', () => {
  let service: ControleAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
