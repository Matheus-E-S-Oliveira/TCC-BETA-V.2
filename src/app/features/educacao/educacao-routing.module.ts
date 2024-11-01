import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: EducacaoDashboardComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacaoRoutingModule { }
