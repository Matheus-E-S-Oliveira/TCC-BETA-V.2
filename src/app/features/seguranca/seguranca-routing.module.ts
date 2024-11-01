import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: "",
    component: SegurancaDashboardComponent
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
export class SegurancaRoutingModule { }
