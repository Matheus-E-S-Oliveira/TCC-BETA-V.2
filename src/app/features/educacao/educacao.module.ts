import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';
import { GraficoEducacaoComponent } from './components/grafico-educacao/grafico-educacao.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComponentsGoblaisModule } from "../../components-goblais/components-goblais.module";


@NgModule({
  declarations: [
    EducacaoDashboardComponent,
    GraficoEducacaoComponent,
    FormularioComponent,
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
    ComponentsGoblaisModule,
    MatRadioModule
]
})
export class EducacaoModule { }
