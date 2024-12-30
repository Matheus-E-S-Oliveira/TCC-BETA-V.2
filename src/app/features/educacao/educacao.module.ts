import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DialogoEducacaoComponent } from './components/dialogo-educacao/dialogo-educacao.component';


@NgModule({
  declarations: [
    EducacaoDashboardComponent,
    GraficoEducacaoComponent,
    FormularioComponent,
    DialogoEducacaoComponent,
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
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule,
]
})
export class EducacaoModule { }
