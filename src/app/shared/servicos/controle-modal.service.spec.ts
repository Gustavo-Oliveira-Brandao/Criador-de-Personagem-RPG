import { TestBed } from '@angular/core/testing';

import { ControleModalService } from './controle-modal.service';

describe('ControleModalService', () => {
  let service: ControleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
