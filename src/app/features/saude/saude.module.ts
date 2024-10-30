import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SaudeRoutingModule } from './saude-routing.module';

import { HealthDashboardComponent } from './components/health-dashboard/health-dashboard.component';
import { GraficoSaudeComponent } from './components/grafico-saude/grafico-saude.component';


@NgModule({
  declarations: [
    HealthDashboardComponent,
    GraficoSaudeComponent,
  ],
  imports: [
    CommonModule,
    SaudeRoutingModule,
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    ChartModule
  ]
})
export class SaudeModule { }
