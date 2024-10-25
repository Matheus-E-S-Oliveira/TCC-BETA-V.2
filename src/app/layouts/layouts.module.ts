import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuBarLayoutComponent } from './menu-bar-layout/menu-bar-layout.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MenuBarLayoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [MenuBarLayoutComponent]
})
export class LayoutsModule { }
