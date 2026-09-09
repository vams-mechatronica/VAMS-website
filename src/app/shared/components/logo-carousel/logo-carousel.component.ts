import { Component } from '@angular/core';

interface ClientLogo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-logo-carousel',
  standalone: false,
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.scss'
})
export class LogoCarouselComponent {
  clients: ClientLogo[] = [
    { src: 'assets/images/Havells_Logo.svg', alt: 'Havells' },
    { src: 'assets/images/header_logo-1634104756307.webp', alt: 'BCG' },
    { src: 'assets/images/hsl-log-new.png', alt: 'Hindustan Shipyard Limited' },
    { src: 'assets/images/maruti-logo.webp', alt: 'Maruti Suzuki' },
    { src: 'assets/images/sterison_logo.png', alt: 'Sterison' },
  ];

  // Duplicated once so the CSS animation can loop seamlessly on a `translateX(-50%)`
  // of the track's own (auto) width, regardless of how wide the logos actually are.
  loopClients = [...this.clients, ...this.clients];
}
