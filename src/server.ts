import { AngularNodeAppEngine } from '@angular/ssr/node';
import netlifyAngular from '@netlify/angular-runtime';

const angularApp = new AngularNodeAppEngine();

export const handler = netlifyAngular(angularApp);
