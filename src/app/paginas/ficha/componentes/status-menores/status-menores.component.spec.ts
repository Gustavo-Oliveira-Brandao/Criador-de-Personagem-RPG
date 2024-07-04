import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMenoresComponent } from './status-menores.component';

describe('StatusMenoresComponent', () => {
  let component: StatusMenoresComponent;
  let fixture: ComponentFixture<StatusMenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusMenoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
