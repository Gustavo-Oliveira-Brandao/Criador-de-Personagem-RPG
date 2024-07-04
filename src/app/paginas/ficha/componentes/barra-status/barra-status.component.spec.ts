import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraStatusComponent } from './barra-status.component';

describe('BarraStatusComponent', () => {
  let component: BarraStatusComponent;
  let fixture: ComponentFixture<BarraStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
