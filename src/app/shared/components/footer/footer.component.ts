import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
currentYear = new Date().getFullYear();
footerLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' }
  ];

  socialLinks = [
    { icon: 'fa-brands fa-facebook', url: 'https://facebook.com' },
    { icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
    { icon: 'fa-brands fa-twitter', url: 'https://twitter.com' },
    { icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com' },
  ];
}
