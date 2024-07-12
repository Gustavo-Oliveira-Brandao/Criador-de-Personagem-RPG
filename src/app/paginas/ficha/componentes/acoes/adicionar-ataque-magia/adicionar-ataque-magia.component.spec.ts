import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAtaqueMagiaComponent } from './adicionar-ataque-magia.component';

describe('AdicionarAtaqueMagiaComponent', () => {
  let component: AdicionarAtaqueMagiaComponent;
  let fixture: ComponentFixture<AdicionarAtaqueMagiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarAtaqueMagiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAtaqueMagiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
