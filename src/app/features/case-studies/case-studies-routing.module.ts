import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesComponent } from './case-studies.component';
import { McfPredictiveMaintenanceComponent } from './cases/mcf-predictive-maintenance/mcf-predictive-maintenance.component';
import { NearbyshopEnergyMonitoringComponent } from './cases/nearbyshop-energy-monitoring/nearbyshop-energy-monitoring.component';

const routes: Routes = [{ path: '', component: CaseStudiesComponent },
{ path: 'mcf-predictive-maintenance', component: McfPredictiveMaintenanceComponent },
{
  path: 'smart-energy-monitoring-fmcg',
  component: NearbyshopEnergyMonitoringComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesRoutingModule { }
