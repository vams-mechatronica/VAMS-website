import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealtimeMonitoringComponent } from './features/products/pages/realtime-monitoring/realtime-monitoring.component';
import { EnergyMonitoringComponent } from './features/products/pages/energy-monitoring/energy-monitoring.component';
import { RoboticsIntegrationComponent } from './features/products/pages/robotics-integration/robotics-integration.component';
import { ProductionSchedulingComponent } from './features/products/pages/production-scheduling/production-scheduling.component';
import { PredictiveMaintenanceComponent } from './features/products/pages/predictive-maintenance/predictive-maintenance.component';
import { MaterialRfidTrackingComponent } from './features/products/pages/material-rfid-tracking/material-rfid-tracking.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path: 'industries',
    loadChildren: () =>
      import('./features/industries/industries.module').then(
        (m) => m.IndustriesModule,
      ),
  },
  {
    path: 'case-studies',
    loadChildren: () =>
      import('./features/case-studies/case-studies.module').then(
        (m) => m.CaseStudiesModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./features/careers/careers.module').then((m) => m.CareersModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  }, {
    path: 'real-time-monitoring',
    component: RealtimeMonitoringComponent
  }, {
    path: 'energy-monitoring',
    component: EnergyMonitoringComponent
  }, {
    path: 'robotics-integration',
    component: RoboticsIntegrationComponent
  }, {
    path: 'production-scheduling',
    component: ProductionSchedulingComponent
  }, {
    path: 'predictive-maintenance',
    component: PredictiveMaintenanceComponent
  }, {
    path: 'material-rfid-tracking',
    component: MaterialRfidTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
