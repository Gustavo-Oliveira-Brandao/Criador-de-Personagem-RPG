import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficienciaComponent } from './proficiencia.component';

describe('ProficienciaComponent', () => {
  let component: ProficienciaComponent;
  let fixture: ComponentFixture<ProficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficienciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
