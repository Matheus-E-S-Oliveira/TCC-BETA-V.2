import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';
import { GraficoEducacaoComponent } from './components/grafico-educacao/grafico-educacao.component';


@NgModule({
  declarations: [
    EducacaoDashboardComponent,
    GraficoEducacaoComponent,
  ],
  imports: [
    CommonModule,
    EducacaoRoutingModule,
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    ChartModule,
  ]
})
export class EducacaoModule { }
