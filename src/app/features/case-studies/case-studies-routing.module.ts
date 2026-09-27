import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesComponent } from './case-studies.component';
import { CaseDetailComponent } from './detail/case-detail.component';

const routes: Routes = [
  { path: '', component: CaseStudiesComponent },
  { path: 'mcf-predictive-maintenance', component: CaseDetailComponent, data: { slug: 'mcf-predictive-maintenance' } },
  { path: 'smart-energy-monitoring-fmcg', component: CaseDetailComponent, data: { slug: 'smart-energy-monitoring-fmcg' } },
  { path: 'iot-based-loom-monitoring', component: CaseDetailComponent, data: { slug: 'iot-based-loom-monitoring' } },
  { path: 'machine-vision-packaging-pharma', component: CaseDetailComponent, data: { slug: 'machine-vision-packaging-pharma' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudiesRoutingModule { }
