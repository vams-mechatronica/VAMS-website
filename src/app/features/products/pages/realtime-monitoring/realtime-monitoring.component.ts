import { Component } from '@angular/core';

@Component({
  selector: 'app-realtime-monitoring',
  standalone: false,
  templateUrl: './realtime-monitoring.component.html',
  styleUrl: './realtime-monitoring.component.scss'
})
export class RealtimeMonitoringComponent {
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
