import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
