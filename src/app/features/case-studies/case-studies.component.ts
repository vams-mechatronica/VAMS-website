import { Component } from '@angular/core';

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  kpis: string[];
  image: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: false,
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
industries = ['All', 'Automotive', 'Textile', 'FMCG', 'Pharma', 'Heavy Engineering'];

  selectedIndustry = 'All';

  caseStudies: CaseStudy[] = [
    {
      title: 'Predictive Maintenance for CNC Machines',
      industry: 'Automotive',
      description:
        'Implemented vibration & energy monitoring on CNC turning centers, reducing machine downtime by 38% and improving OEE by 22%.',
      kpis: ['Downtime reduced 38%', 'OEE improved 22%', 'ROI in 5.5 months'],
      image: '/assets/case-studies/cnc.jpg'
    },
    {
      title: 'Smart Energy Monitoring for Process Plant',
      industry: 'FMCG',
      description:
        'Deployed energy meters across multiple lines to track load patterns and detect inefficiencies.',
      kpis: ['Energy savings 17%', 'Zero unplanned outages', '150+ sensors deployed'],
      image: '/assets/case-studies/energy.jpg'
    },
    {
      title: 'IoT-Based Loom Monitoring',
      industry: 'Textile',
      description:
        'Real-time monitoring of spindle speed, yarn breakage alerts, and machine runtime data.',
      kpis: ['Breakdowns reduced 31%', 'Production output +18%', 'Quality defects -22%'],
      image: '/assets/case-studies/loom.jpg'
    },
    {
      title: 'Machine Vision for Packaging Line',
      industry: 'Pharma',
      description:
        'High-speed vision system for label verification, OCR, expiry validation, and defect detection.',
      kpis: ['99.6% detection accuracy', 'Production speed 300+ packs/min', 'False rejects -45%'],
      image: '/assets/case-studies/vision.jpg'
    }
  ];

  /** Filter case studies */
  get filteredCaseStudies() {
    if (this.selectedIndustry === 'All') return this.caseStudies;
    return this.caseStudies.filter(cs => cs.industry === this.selectedIndustry);
  }

  changeIndustry(industry: string) {
    this.selectedIndustry = industry;
  }
}