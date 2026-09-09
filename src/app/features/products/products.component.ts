import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Industrial Automation Solutions | VAMS Mechatronica');
    this.meta.updateTag({
      name: 'description',
      content: 'Explore VAMS Mechatronica solutions: real-time monitoring, predictive maintenance, production scheduling, material & RFID tracking, energy monitoring and MES/robotics integration.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Industrial Automation Solutions | VAMS Mechatronica' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
