import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiaComponent } from './magia.component';

describe('MagiaComponent', () => {
  let component: MagiaComponent;
  let fixture: ComponentFixture<MagiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
