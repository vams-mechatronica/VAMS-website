import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { RealtimeMonitoringComponent } from './pages/realtime-monitoring/realtime-monitoring.component';
import { EnergyMonitoringComponent } from './pages/energy-monitoring/energy-monitoring.component';
import { RoboticsIntegrationComponent } from './pages/robotics-integration/robotics-integration.component';
import { ProductionSchedulingComponent } from './pages/production-scheduling/production-scheduling.component';
import { PredictiveMaintenanceComponent } from './pages/predictive-maintenance/predictive-maintenance.component';
import { MaterialRfidTrackingComponent } from './pages/material-rfid-tracking/material-rfid-tracking.component';
import { RealTimeMonitoringDetailsComponent } from './pages/realtime-monitoring/real-time-monitoring-details/real-time-monitoring-details.component';
import { PredictiveMaintenanceDetailsComponent } from './pages/predictive-maintenance/predictive-maintenance-details/predictive-maintenance-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/promonitor' },
  { path: 'realtime-monitoring', redirectTo: '/promonitor/real-time-monitoring' },
  { path: 'realtime-monitoring/details', redirectTo: '/promonitor/real-time-monitoring' },
  { path: 'predictive-maintenance', redirectTo: '/promonitor/predictive-maintenance' },
  { path: 'predictive-maintenance/details', redirectTo: '/promonitor/predictive-maintenance' },
  { path: 'production-scheduling', redirectTo: '/promonitor/production-monitoring' },
  { path: 'robotics-integration', redirectTo: '/promonitor' },
  { path: 'energy-monitoring', redirectTo: '/promonitor' },
  { path: 'material-rfid-tracking', redirectTo: '/promonitor' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
