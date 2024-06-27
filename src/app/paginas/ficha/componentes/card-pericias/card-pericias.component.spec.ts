import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPericiasComponent } from './card-pericias.component';

describe('PericiasComponent', () => {
  let component: CardPericiasComponent;
  let fixture: ComponentFixture<CardPericiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPericiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPericiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
