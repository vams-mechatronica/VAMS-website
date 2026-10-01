import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CareersComponent } from './careers.component';


@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
