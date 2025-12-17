import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobile = false;

  navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
  ];

  pagesDropdown = [
    { label: 'Our Team', route: '/team' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'FAQ', route: '/faq' },
  ];

  blogDropdown = [
    { label: 'Blog List', route: '/blog' },
    { label: 'Blog Details', route: '/blog-details' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
