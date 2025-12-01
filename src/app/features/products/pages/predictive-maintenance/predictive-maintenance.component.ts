import { Component } from '@angular/core';

@Component({
  selector: 'app-predictive-maintenance',
  standalone: false,
  templateUrl: './predictive-maintenance.component.html',
  styleUrl: './predictive-maintenance.component.scss'
})
export class PredictiveMaintenanceComponent {
logos: string[] = [
    'assets/images/Havells_Logo.svg',
    'assets/images/header_logo-1634104756307.webp',
    'assets/images/hsl-log-new.png',
    'assets/images/maruti-logo.webp',
    'assets/images/sterison_logo.png'
  ];

  // Duplicate logos to make infinite loop seamless
  loopLogos = [...this.logos, ...this.logos];
}
