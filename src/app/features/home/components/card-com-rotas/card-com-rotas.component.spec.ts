import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComRotasComponent } from './card-com-rotas.component';

describe('CardComRotasComponent', () => {
  let component: CardComRotasComponent;
  let fixture: ComponentFixture<CardComRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComRotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
