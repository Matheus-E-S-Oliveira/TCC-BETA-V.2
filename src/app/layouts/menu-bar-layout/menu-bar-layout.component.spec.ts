import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarLayoutComponent } from './menu-bar-layout.component';

describe('MenuBarLayoutComponent', () => {
  let component: MenuBarLayoutComponent;
  let fixture: ComponentFixture<MenuBarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuBarLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
