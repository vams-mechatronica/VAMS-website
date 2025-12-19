import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderSpinnerComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, LoaderSpinnerComponent, MaterialModule],
})
export class SharedModule {}
