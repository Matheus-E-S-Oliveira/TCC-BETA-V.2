import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';


import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficoTelasGrandesComponent } from './components/grafico-telas-grandes/grafico-telas-grandes.component';
import { GraficoTelasPequenasComponent } from './components/grafico-telas-pequenas/grafico-telas-pequenas.component';
import { CardComRotasComponent } from './components/card-com-rotas/card-com-rotas.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GraficoTelasGrandesComponent,
    GraficoTelasPequenasComponent,
    CardComRotasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RatingModule,
    ChartModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [GraficoTelasGrandesComponent, GraficoTelasPequenasComponent]
})
export class HomeModule { }
