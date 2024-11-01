import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthDashboardComponent } from './components/health-dashboard/health-dashboard.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', 
    component: HealthDashboardComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaudeRoutingModule { }
