import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'promonitor',
    loadChildren: () =>
      import('./features/promonitor/promonitor.module').then(
        (m) => m.PromonitorModule,
      ),
  },
  {
    path: 'job-shop-scheduling',
    loadChildren: () =>
      import('./features/scheduling/scheduling.module').then(
        (m) => m.SchedulingModule,
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path: 'industries',
    loadChildren: () =>
      import('./features/industries/industries.module').then(
        (m) => m.IndustriesModule,
      ),
  },
  {
    path: 'case-studies',
    loadChildren: () =>
      import('./features/case-studies/case-studies.module').then(
        (m) => m.CaseStudiesModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./features/careers/careers.module').then((m) => m.CareersModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Fetch the other lazy modules in the background once the first page is idle.
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 96]
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
