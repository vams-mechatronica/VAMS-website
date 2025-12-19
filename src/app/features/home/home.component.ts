import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // aboutData: VamsAbout | null = null;
  // promonitor: any;

  logos: string[] = [
    'assets/images/Havells_Logo.svg',
    'assets/images/header_logo-1634104756307.webp',
    'assets/images/hsl-log-new.png',
    'assets/images/maruti-logo.webp',
    'assets/images/sterison_logo.png'
  ];

  // Duplicate logos to make infinite loop seamless
  loopLogos = [...this.logos, ...this.logos];

  introImage: string = 'assets/images/digital_factory.jpg';
  missionImage: string = 'assets/images/mission_vams.jpeg';

  missionHighlights = [
    { icon: 'fa-lightbulb', label: 'Innovation-Driven Solutions' },
    { icon: 'fa-industry', label: 'Digital Factory Enablement' },
    { icon: 'fa-chart-line', label: 'Operational Excellence' },
    { icon: 'fa-shield-halved', label: 'Reliable & Secure Systems' },
  ];


  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle(
      'Industrial Automation & IIoT Solutions | VAMS Mechatronica'
    );

    this.meta.addTags([
      { name: 'description', content: 'Industry 4.0, Industrial IoT, predictive maintenance, robotics & real-time monitoring solutions.' },
      { name: 'keywords', content: 'industrial automation, IIoT, predictive maintenance, CNC monitoring' },
      { property: 'og:title', content: 'VAMS Mechatronica' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
