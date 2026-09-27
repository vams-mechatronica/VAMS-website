import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesComponent } from './case-studies.component';
import { CaseDetailComponent } from './detail/case-detail.component';

@NgModule({
  declarations: [CaseStudiesComponent, CaseDetailComponent],
  imports: [CommonModule, CaseStudiesRoutingModule, SharedModule]
})
export class CaseStudiesModule { }
