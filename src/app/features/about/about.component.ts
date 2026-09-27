import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) {}

  readonly values = [
    { icon: 'fa-lightbulb', title: 'Innovation', text: 'We embrace new technologies to deliver modern, scalable Industry 4.0 solutions.' },
    { icon: 'fa-scale-balanced', title: 'Integrity', text: 'We operate with honesty, transparency and strong ethical standards.' },
    { icon: 'fa-handshake', title: 'Customer Focus', text: 'We prioritize customer success and measurable business outcomes.' },
    { icon: 'fa-shield-halved', title: 'Reliability', text: 'We deliver robust, industrial-grade systems built for the shop floor.' },
    { icon: 'fa-people-group', title: 'Collaboration', text: 'We build long-term partnerships that help industries grow and modernize.' },
  ];

  readonly why = [
    { icon: 'fa-microchip', text: 'Expertise in automation, IoT, AI, MES and machine connectivity' },
    { icon: 'fa-layer-group', text: 'ProMonitor is available as SaaS (cloud) or on-premise' },
    { icon: 'fa-chart-line', text: 'Live visibility into OEE, uptime and production from machine data' },
    { icon: 'fa-network-wired', text: 'Open REST API and live data stream for connecting existing IT systems' },
    { icon: 'fa-headset', text: 'Dedicated team with strong domain expertise and support' },
  ];

  ngOnInit(): void {
    this.seo.set({
      title: 'About Us | VAMS Mechatronica',
      description: 'VAMS Mechatronica is a DPIIT-recognized technology company specializing in industrial IoT, machine connectivity, automation systems and predictive maintenance, and the developer of the ProMonitor industrial software platform.',
      path: '/about',
    });
  }
}
