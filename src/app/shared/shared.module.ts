import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { ScreenshotFrameComponent } from './components/screenshot-frame/screenshot-frame.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderSpinnerComponent, LogoCarouselComponent, ScreenshotFrameComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, LoaderSpinnerComponent, LogoCarouselComponent, ScreenshotFrameComponent, MaterialModule],
})
export class SharedModule {}
