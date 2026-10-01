import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    IndustriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IndustriesRoutingModule,
    SharedModule
  ]
})
export class IndustriesModule { }
