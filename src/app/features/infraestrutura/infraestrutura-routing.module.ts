import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraestruturaDashboardComponent } from './components/infraestrutura-dashboard/infraestrutura-dashboard.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: InfraestruturaDashboardComponent
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
export class InfraestruturaRoutingModule { }
