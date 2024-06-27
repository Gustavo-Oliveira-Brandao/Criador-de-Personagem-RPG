import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResistenciasComponent } from './card-resistencias.component';

describe('ResistenciasComponent', () => {
  let component: CardResistenciasComponent;
  let fixture: ComponentFixture<CardResistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardResistenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
