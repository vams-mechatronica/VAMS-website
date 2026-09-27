import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

interface Industry {
  icon: string;
  name: string;
  description: string;
  applications: string[];
}

@Component({
  selector: 'app-industries',
  standalone: false,
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent implements OnInit {

  industries: Industry[] = [
    {
      icon: 'fa-train',
      name: 'Railways',
      description: 'VAMS Mechatronica has delivered implementations in the railway sector.',
      applications: [],
    },
    {
      icon: 'fa-shield-halved',
      name: 'Defence',
      description: 'VAMS Mechatronica has delivered implementations in the defence sector.',
      applications: [],
    },
    {
      icon: '/assets/icons/car-solid-full.svg',
      name: 'Automotive',
      description: 'Predictive maintenance, CNC monitoring, robotics & assembly automation for automotive component manufacturers.',
      applications: ['CNC machine monitoring', 'Predictive maintenance', 'Robotics & assembly integration'],
    },
    {
      icon: '/assets/icons/cart-arrow-down-solid-full.svg',
      name: 'FMCG',
      description: 'Energy monitoring, process optimization and packaging line analytics for fast-moving consumer goods plants.',
      applications: ['Energy monitoring', 'Process optimization', 'Packaging line analytics'],
    },
    {
      icon: '/assets/icons/rug-solid-full.svg',
      name: 'Textile',
      description: 'IoT-based loom monitoring, spindle analytics and quality improvement for textile manufacturing.',
      applications: ['Loom monitoring', 'Spindle analytics', 'Quality tracking'],
    },
    {
      icon: '/assets/icons/prescription-bottle-solid-full.svg',
      name: 'Pharmaceuticals',
      description: 'Machine vision inspection, OCR and traceability systems to support quality and compliance requirements.',
      applications: ['Machine vision inspection', 'OCR-based verification', 'Traceability & compliance'],
    },
    {
      icon: '/assets/icons/chart-diagram-solid-full.svg',
      name: 'Process & Chemical',
      description: 'Continuous process monitoring, asset reliability tracking and safety-focused instrumentation.',
      applications: ['Continuous process monitoring', 'Asset reliability', 'Safety instrumentation'],
    },
    {
      icon: '/assets/icons/industry-solid-full.svg',
      name: 'Manufacturing & Engineering',
      description: 'Real-time dashboards, OEE improvement and smart factory solutions for discrete and heavy manufacturing.',
      applications: ['Real-time dashboards', 'OEE improvement', 'Smart factory integration'],
    },
  ];

  constructor(private seo: SeoService) {}

  /** Font Awesome icon names have no path; the rest are image files. */
  isFaIcon(icon: string): boolean {
    return icon.startsWith('fa-');
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Industries We Serve | VAMS Mechatronica',
      description: 'VAMS Mechatronica delivers Industry 4.0 and industrial automation solutions for railways, defence, automotive, FMCG, textile, pharmaceuticals, process & chemical, and manufacturing.',
      path: '/industries',
    });
  }
}
