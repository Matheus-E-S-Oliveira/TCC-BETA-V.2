import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaudeRoutingModule } from './saude-routing.module';

import { HealthDashboardComponent } from './components/health-dashboard/health-dashboard.component';


@NgModule({
  declarations: [
    HealthDashboardComponent
  ],
  imports: [
    CommonModule,
    SaudeRoutingModule
  ]
})
export class SaudeModule { }
