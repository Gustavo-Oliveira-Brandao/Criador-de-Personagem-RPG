import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPersonagemComponent } from './foto-personagem.component';

describe('FotoPersonagemComponent', () => {
  let component: FotoPersonagemComponent;
  let fixture: ComponentFixture<FotoPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoPersonagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
