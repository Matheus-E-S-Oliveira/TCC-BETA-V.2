import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsGoblaisRoutingModule } from './components-goblais-routing.module';
import { StarComponent } from './components/star/star.component';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    ComponentsGoblaisRoutingModule,
    MatIcon
  ],
  exports: [StarComponent]
})
export class ComponentsGoblaisModule { }
