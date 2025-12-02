import { Component } from '@angular/core';

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


  constructor() {}

  ngOnInit() {
    // this.vams.getAbout().subscribe(data => {
    //   this.aboutData = data;
    // });

    // this.vams.getPromonitor().subscribe(pm => {
    //   this.promonitor = pm;
    // });
  }
}
