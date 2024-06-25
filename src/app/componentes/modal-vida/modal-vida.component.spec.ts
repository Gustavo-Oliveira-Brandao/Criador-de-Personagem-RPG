import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVidaComponent } from './modal-vida.component';

describe('ModalVidaComponent', () => {
  let component: ModalVidaComponent;
  let fixture: ComponentFixture<ModalVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
