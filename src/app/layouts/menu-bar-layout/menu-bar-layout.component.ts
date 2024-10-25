import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar-layout',
  templateUrl: './menu-bar-layout.component.html',
  styleUrl: './menu-bar-layout.component.scss'
})
export class MenuBarLayoutComponent {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  getIcon() {
    return this.isVisible ? 'assets/icons/close.svg' : 'assets/icons/menu.svg';
  }
}
