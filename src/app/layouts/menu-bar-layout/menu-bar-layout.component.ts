import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar-layout',
  templateUrl: './menu-bar-layout.component.html',
  styleUrl: './menu-bar-layout.component.scss'
})
export class MenuBarLayoutComponent {
  isVisible: boolean = false;
  isLoading: boolean = false;
  
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleVisibility() {
    if (this.isLoading) return;

    this.isLoading = true; 
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.isLoading = false; 
 
    }, 100); 
  }
  getIcon() {
    return this.isVisible ? 'assets/icons/close.svg' : 'assets/icons/menu.svg';
  }
}
