import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadeComponent } from './habilidade.component';

describe('HabilidadeComponent', () => {
  let component: HabilidadeComponent;
  let fixture: ComponentFixture<HabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
