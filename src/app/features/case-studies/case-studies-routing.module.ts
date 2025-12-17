import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesComponent } from './case-studies.component';
import { McfPredictiveMaintenanceComponent } from './cases/mcf-predictive-maintenance/mcf-predictive-maintenance.component';
import { NearbyshopEnergyMonitoringComponent } from './cases/nearbyshop-energy-monitoring/nearbyshop-energy-monitoring.component';
import { LoomMonitoringComponent } from './cases/loom-monitoring/loom-monitoring.component';
import { MachineVisionPackingComponent } from './cases/machine-vision-packing/machine-vision-packing.component';

const routes: Routes = [{ path: '', component: CaseStudiesComponent },
{ path: 'mcf-predictive-maintenance', component: McfPredictiveMaintenanceComponent },
{
  path: 'smart-energy-monitoring-fmcg',
  component: NearbyshopEnergyMonitoringComponent
},{
  path: 'iot-based-loom-monitoring',
  component: LoomMonitoringComponent
},{
  path: 'machine-vision-packaging-pharma',
  component: MachineVisionPackingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesRoutingModule { }
