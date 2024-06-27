import { TestBed } from '@angular/core/testing';

import { ControleFichaService } from './controle-ficha.service';

describe('ControleFichaService', () => {
  let service: ControleFichaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleFichaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
