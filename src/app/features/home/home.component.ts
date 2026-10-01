import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

interface Capability { icon: string; title: string; points: string[]; link?: { label: string; url: string }; }
interface Layer { name: string; what: string; benefit: string; }
interface Industry { icon: string; title: string; text: string; delivered?: boolean; }

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly protocols = ['OPC UA', 'Modbus TCP', 'MQTT', 'MTConnect', 'FOCAS', 'Siemens'];

  readonly capabilities: Capability[] = [
    { icon: 'fa-gears', title: 'Industrial Automation', points: ['Machine, PLC and robotics integration', 'Automation of shop-floor equipment'] },
    { icon: 'fa-plug', title: 'Industrial Connectivity', points: ['OPC UA, Modbus TCP, MQTT, MTConnect, FOCAS and Siemens', 'Mixed equipment brought into one platform'] },
    { icon: 'fa-industry', title: 'Industry 4.0', points: ['Existing machines turned into connected assets', 'Shop-floor data made available to the business'] },
    { icon: 'fa-database', title: 'Industrial Data', points: ['Machine telemetry, states and events', 'Collected, stored and visualized in one place'] },
    { icon: 'fa-chart-line', title: 'Manufacturing Intelligence', points: ['Real-time machine and production visibility', 'Machine health and failure prediction'], link: { label: 'Real-Time Monitoring', url: '/promonitor/real-time-monitoring' } },
    { icon: 'fa-microchip', title: 'Industrial Software', points: ['ProMonitor: core platform plus monitoring, production and maintenance applications', 'Available as SaaS (cloud) or on-premise'], link: { label: 'Explore ProMonitor', url: '/promonitor' } },
  ];

  readonly industries: Industry[] = [
    { icon: 'fa-train', title: 'Railways', text: 'Implemented by VAMS Mechatronica in the railway sector.', delivered: true },
    { icon: 'fa-shield-halved', title: 'Defence', text: 'Implemented by VAMS Mechatronica in the defence sector.', delivered: true },
    { icon: 'fa-car', title: 'Automotive', text: 'Predictive maintenance, CNC monitoring, robotics and assembly automation.' },
    { icon: 'fa-cart-shopping', title: 'FMCG', text: 'Energy monitoring, process optimization, packaging line analytics.' },
    { icon: 'fa-rug', title: 'Textile', text: 'IoT-based loom monitoring, spindle analytics, quality improvement.' },
    { icon: 'fa-prescription-bottle-medical', title: 'Pharmaceuticals', text: 'Machine vision inspection, OCR, compliance and traceability.' },
    { icon: 'fa-flask', title: 'Process & Chemical', text: 'Continuous process monitoring, asset reliability and safety.' },
    { icon: 'fa-industry', title: 'Manufacturing', text: 'Real-time dashboards, OEE improvement, smart factory solutions.' },
  ];

  activeLayer = 0;

  readonly architectureLayers: Layer[] = [
    { name: 'Machines & Sensors', what: 'CNC machines, PLCs, robots and sensors on the shop floor generate the raw signals: speed, temperature, vibration, energy, status.', benefit: 'The source of truth for everything happening on the floor, in real time.' },
    { name: 'Industrial Network', what: 'Machine data is carried over the plant network to a central point, connecting equipment that was previously isolated.', benefit: 'Removes manual data collection and paper logs.' },
    { name: 'Edge / Gateway', what: 'Gateways aggregate and normalize signals from mixed machine brands and protocols before they leave the shop floor.', benefit: 'One consistent data format regardless of machine age or vendor.' },
    { name: 'ProMonitor Platform', what: 'Our IIoT platform ingests the normalized data and turns it into machine health, OEE and production metrics.', benefit: 'A single dashboard instead of scattered spreadsheets and shift logs.' },
    { name: 'Analytics & Alerts', what: 'Historical and live data is analyzed for anomalies, downtime patterns and maintenance signals.', benefit: 'Problems are surfaced before they become breakdowns.' },
    { name: 'Business Decisions', what: 'Production, maintenance and management teams act on the same real-time picture of the factory.', benefit: 'Faster, data-backed decisions instead of end-of-shift guesswork.' },
  ];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'VAMS Mechatronica | Industrial Automation & Industry 4.0',
      description:
        'VAMS Mechatronica develops industrial automation and Industry 4.0 solutions, including ProMonitor for machine connectivity, real-time monitoring, production intelligence and predictive maintenance.',
      path: '/',
    });
  }
}
