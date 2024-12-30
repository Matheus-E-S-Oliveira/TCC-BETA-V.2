import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



import { SegurancaRoutingModule } from './seguranca-routing.module';
import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';
import { GraficoSegurancaComponent } from './components/grafico-seguranca/grafico-seguranca.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComponentsGoblaisModule } from "../../components-goblais/components-goblais.module";
import { DialogoComponent } from './components/dialogo/dialogo.component';



@NgModule({
  declarations: [
    SegurancaDashboardComponent,
    GraficoSegurancaComponent,
    FormularioComponent,
    DialogoComponent,
  ],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    RatingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    ChartModule,
    MatRadioModule,
    ComponentsGoblaisModule,
    MatDialogModule
]
})
export class SegurancaModule { }
