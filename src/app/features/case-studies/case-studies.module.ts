import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesComponent } from './case-studies.component';
import { McfPredictiveMaintenanceComponent } from './cases/mcf-predictive-maintenance/mcf-predictive-maintenance.component';
import { NearbyshopEnergyMonitoringComponent } from './cases/nearbyshop-energy-monitoring/nearbyshop-energy-monitoring.component';


@NgModule({
  declarations: [
    CaseStudiesComponent,
    McfPredictiveMaintenanceComponent,
    NearbyshopEnergyMonitoringComponent
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule
  ]
})
export class CaseStudiesModule { }
