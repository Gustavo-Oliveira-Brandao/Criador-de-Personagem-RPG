import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraVidaComponent } from './barra-vida.component';

describe('BarraVidaComponent', () => {
  let component: BarraVidaComponent;
  let fixture: ComponentFixture<BarraVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraVidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
