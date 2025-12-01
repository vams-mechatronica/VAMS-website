import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { RoboticsIntegrationComponent } from './pages/robotics-integration/robotics-integration.component';
import { PredictiveMaintenanceComponent } from './pages/predictive-maintenance/predictive-maintenance.component';
import { ProductionSchedulingComponent } from './pages/production-scheduling/production-scheduling.component';
import { MaterialRfidTrackingComponent } from './pages/material-rfid-tracking/material-rfid-tracking.component';
import { EnergyMonitoringComponent } from './pages/energy-monitoring/energy-monitoring.component';


@NgModule({
  declarations: [
    ProductsComponent,
    RoboticsIntegrationComponent,
    PredictiveMaintenanceComponent,
    ProductionSchedulingComponent,
    MaterialRfidTrackingComponent,
    EnergyMonitoringComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
