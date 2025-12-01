import { Component } from '@angular/core';

@Component({
  selector: 'app-robotics-integration',
  standalone: false,
  templateUrl: './robotics-integration.component.html',
  styleUrl: './robotics-integration.component.scss'
})
export class RoboticsIntegrationComponent {
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
