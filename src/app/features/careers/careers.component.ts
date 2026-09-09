import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Careers | VAMS Mechatronica');
    this.meta.updateTag({
      name: 'description',
      content: 'Join VAMS Mechatronica and build Industry 4.0, IIoT and industrial automation solutions for manufacturers.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Careers | VAMS Mechatronica' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
