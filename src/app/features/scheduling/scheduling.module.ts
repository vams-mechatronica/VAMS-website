import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SchedulingComponent } from './scheduling.component';

const routes: Routes = [{ path: '', component: SchedulingComponent }];

@NgModule({
  declarations: [SchedulingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SchedulingModule {}
