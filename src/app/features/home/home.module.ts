import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { VamsAbout, VamsService } from '../../core/services/home.services';

const routes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule {
  boutData: VamsAbout | null = null;
  promonitor: any;

  constructor(private vams: VamsService) {}

 }
