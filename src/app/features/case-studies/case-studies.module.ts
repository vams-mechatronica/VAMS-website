import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesComponent } from './case-studies.component';


@NgModule({
  declarations: [
    CaseStudiesComponent
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule
  ]
})
export class CaseStudiesModule { }
