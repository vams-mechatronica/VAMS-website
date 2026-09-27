import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set({
      title: 'Careers | VAMS Mechatronica',
      description: 'Work with VAMS Mechatronica on industrial software, machine connectivity and Industry 4.0.',
      path: '/careers',
    });
  }
}
