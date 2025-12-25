declare module '@netlify/angular-runtime' {
  import { AngularNodeAppEngine } from '@angular/ssr/node';

  const netlifyAngular: (app: AngularNodeAppEngine) => any;
  export default netlifyAngular;
}
