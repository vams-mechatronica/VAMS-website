import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { RealtimeMonitoringComponent } from './pages/realtime-monitoring/realtime-monitoring.component';
import { EnergyMonitoringComponent } from './pages/energy-monitoring/energy-monitoring.component';
import { RoboticsIntegrationComponent } from './pages/robotics-integration/robotics-integration.component';
import { ProductionSchedulingComponent } from './pages/production-scheduling/production-scheduling.component';
import { PredictiveMaintenanceComponent } from './pages/predictive-maintenance/predictive-maintenance.component';
import { MaterialRfidTrackingComponent } from './pages/material-rfid-tracking/material-rfid-tracking.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'realtime-monitoring', component: RealtimeMonitoringComponent },
  { path: 'energy-monitoring', component: EnergyMonitoringComponent },
  { path: 'robotics-integration', component: RoboticsIntegrationComponent },
  { path: 'production-scheduling', component: ProductionSchedulingComponent },
  { path: 'predictive-maintenance', component: PredictiveMaintenanceComponent },
  { path: 'material-rfid-tracking', component: MaterialRfidTrackingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
