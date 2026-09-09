import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('About Us | VAMS Mechatronica');
    this.meta.updateTag({
      name: 'description',
      content: 'VAMS Mechatronica is a DPIIT-recognized technology company specializing in Industrial IoT, machine connectivity, automation systems, predictive maintenance and MES integration.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'About Us | VAMS Mechatronica' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
