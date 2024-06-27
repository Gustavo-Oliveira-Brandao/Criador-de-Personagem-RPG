import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraManaComponent } from './barra-mana.component';

describe('BarraManaComponent', () => {
  let component: BarraManaComponent;
  let fixture: ComponentFixture<BarraManaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraManaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
