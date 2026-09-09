import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Industries We Serve | VAMS Mechatronica');
    this.meta.updateTag({
      name: 'description',
      content: 'VAMS Mechatronica delivers Industry 4.0 and industrial automation solutions across automotive, FMCG, textile, pharmaceuticals, process & chemical, and manufacturing sectors.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Industries We Serve | VAMS Mechatronica' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
