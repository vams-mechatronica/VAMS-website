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
