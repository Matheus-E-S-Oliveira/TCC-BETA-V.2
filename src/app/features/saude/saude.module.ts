import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RatingModule } from 'primeng/rating';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { SaudeRoutingModule } from './saude-routing.module';

import { HealthDashboardComponent } from './components/health-dashboard/health-dashboard.component';
import { GraficoSaudeComponent } from './components/grafico-saude/grafico-saude.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComponentsGoblaisModule } from "../../components-goblais/components-goblais.module";
import { DialogoSaudeComponent } from './components/dialogo-saude/dialogo-saude.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HealthDashboardComponent,
    GraficoSaudeComponent,
    FormularioComponent,
    DialogoSaudeComponent,
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
    ChartModule,
    MatRadioModule,
    ComponentsGoblaisModule,
    MatDialogModule
]
})
export class SaudeModule { }
