import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { InfraestruturaRoutingModule } from './infraestrutura-routing.module';

import { InfraestruturaDashboardComponent } from './components/infraestrutura-dashboard/infraestrutura-dashboard.component';
import { GraficoInfraestruturaComponent } from './components/grafico-infraestrutura/grafico-infraestrutura.component';


@NgModule({
  declarations: [
    InfraestruturaDashboardComponent,
    GraficoInfraestruturaComponent,
  ],
  imports: [
    CommonModule,
    InfraestruturaRoutingModule,
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    ChartModule
  ]
})
export class InfraestruturaModule { }
