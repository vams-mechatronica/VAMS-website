import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-monitoring',
  standalone: false,
  templateUrl: './energy-monitoring.component.html',
  styleUrl: './energy-monitoring.component.scss'
})
export class EnergyMonitoringComponent {
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
