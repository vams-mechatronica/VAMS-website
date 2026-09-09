import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderSpinnerComponent, LogoCarouselComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, LoaderSpinnerComponent, LogoCarouselComponent, MaterialModule],
})
export class SharedModule {}
