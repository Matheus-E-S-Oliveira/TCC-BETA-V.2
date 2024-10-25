import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthDashboardComponent } from './components/health-dashboard/health-dashboard.component';

const routes: Routes = [
  { path: '', 
    component: HealthDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaudeRoutingModule { }
