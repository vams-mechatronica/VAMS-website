import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PromonitorOverviewComponent } from './pages/promonitor-overview.component';
import { PromonitorAppComponent } from './pages/promonitor-app.component';

const routes: Routes = [
  { path: '', component: PromonitorOverviewComponent },
  { path: 'real-time-monitoring', component: PromonitorAppComponent, data: { slug: 'real-time-monitoring' } },
  { path: 'production-monitoring', component: PromonitorAppComponent, data: { slug: 'production-monitoring' } },
  { path: 'predictive-maintenance', component: PromonitorAppComponent, data: { slug: 'predictive-maintenance' } },
];

@NgModule({
  declarations: [PromonitorOverviewComponent, PromonitorAppComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PromonitorModule {}
