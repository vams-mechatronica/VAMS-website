import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import {
  APP_ORDER, APP_PAGES, AppPageContent, CORE_CAPABILITIES, PROTOCOLS, PROTOCOLS_AVAILABLE, Point, Shot, TECH_GROUPS,
} from '../promonitor.content';

@Component({
  selector: 'app-promonitor-overview',
  standalone: false,
  templateUrl: './promonitor-overview.component.html',
  styleUrl: './promonitor-overview.component.scss',
})
export class PromonitorOverviewComponent implements OnInit {
  readonly protocols = PROTOCOLS;
  readonly protocolsAvailable = PROTOCOLS_AVAILABLE;
  readonly core = CORE_CAPABILITIES;
  readonly tech = TECH_GROUPS;
  readonly apps: AppPageContent[] = APP_ORDER.map((slug) => APP_PAGES[slug]);

  /** Equipment ProMonitor connects to, per the platform's system context. */
  readonly equipment = ['CNC machines', 'PLCs', 'Robots', 'Sensors', 'Meters'];

  /** Applications on the roadmap — not available yet, and labelled as such. */
  readonly roadmap = ['Quality management', 'ERP / MES integration', 'Material & RFID tracking'];

  /** Screens that exist as real screenshots; production screens join once captured with data. */
  readonly gallery: Shot[] = [
    APP_PAGES['real-time-monitoring'].shots[0],
    APP_PAGES['real-time-monitoring'].shots[1],
    APP_PAGES['real-time-monitoring'].shots[2],
    APP_PAGES['predictive-maintenance'].shots[0],
    APP_PAGES['predictive-maintenance'].shots[1],
    APP_PAGES['predictive-maintenance'].shots[2],
  ];

  readonly value: Point[] = [
    { icon: 'fa-eye', title: 'Improve visibility', text: 'Understand machine and production status as it changes.' },
    { icon: 'fa-triangle-exclamation', title: 'Catch abnormal behaviour earlier', text: 'Identify unusual machine behaviour before it turns into unplanned downtime.' },
    { icon: 'fa-bullseye', title: 'Improve production control', text: 'Compare production against targets during the shift.' },
    { icon: 'fa-database', title: 'Centralize industrial data', text: 'Bring data from different machines and protocols into one platform.' },
    { icon: 'fa-chart-line', title: 'Decide from data', text: 'Base maintenance and production decisions on what the machines report.' },
  ];

  readonly security: Point[] = [
    { icon: 'fa-key', title: 'Authentication and roles', text: 'Token-based sign-in with role-based permissions and per-application access.' },
    { icon: 'fa-building-lock', title: 'Organization separation', text: 'Users and data are scoped to their organization.' },
    { icon: 'fa-lock', title: 'Protected device credentials', text: 'Credentials for connected devices are stored encrypted.' },
    { icon: 'fa-clipboard-list', title: 'Audit log', text: 'Changes are recorded in an audit log that can be exported to CSV.' },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set({
      title: 'ProMonitor — Industrial Intelligence Platform | VAMS Mechatronica',
      description:
        'ProMonitor is VAMS Mechatronica’s industrial software platform, available as SaaS or on-premise: it connects CNC machines and PLCs, collects industrial data and provides real-time monitoring, production monitoring and predictive maintenance.',
      path: '/promonitor',
    });
  }
}
