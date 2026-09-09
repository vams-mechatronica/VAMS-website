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

  introImage: string = 'assets/images/digital_factory.jpg';
  missionImage: string = 'assets/images/mission_vams.jpeg';

  missionHighlights = [
    { icon: 'fa-lightbulb', label: 'Innovation-Driven Solutions' },
    { icon: 'fa-industry', label: 'Digital Factory Enablement' },
    { icon: 'fa-chart-line', label: 'Operational Excellence' },
    { icon: 'fa-shield-halved', label: 'Reliable & Secure Systems' },
  ];

  activeLayer = 0;

  architectureLayers = [
    {
      name: 'Machines & Sensors',
      what: 'CNC machines, PLCs, robots and sensors on the shop floor generate the raw signals — speed, temperature, vibration, energy, status.',
      benefit: 'The source of truth for everything happening on the floor, in real time.',
    },
    {
      name: 'Industrial Network',
      what: 'Machine data is carried over the plant network to a central point, connecting equipment that was previously isolated.',
      benefit: 'Removes manual data collection and paper logs.',
    },
    {
      name: 'Edge / Gateway',
      what: 'Gateways aggregate and normalize signals from mixed machine brands and protocols before they leave the shop floor.',
      benefit: 'One consistent data format regardless of machine age or vendor.',
    },
    {
      name: 'ProMonitor Platform',
      what: 'Our IIoT platform ingests the normalized data and turns it into machine health, OEE, and production metrics.',
      benefit: 'A single dashboard instead of scattered spreadsheets and shift logs.',
    },
    {
      name: 'Analytics & Alerts',
      what: 'Historical and live data is analyzed for anomalies, downtime patterns, and maintenance signals.',
      benefit: 'Problems are surfaced before they become breakdowns.',
    },
    {
      name: 'Business Decisions',
      what: 'Production, maintenance and management teams act on the same real-time picture of the factory.',
      benefit: 'Faster, data-backed decisions instead of end-of-shift guesswork.',
    },
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
