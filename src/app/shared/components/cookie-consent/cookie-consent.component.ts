import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsentService } from '../../../core/services/consent.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: false,
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent implements OnInit {
  show$!: Observable<boolean>;

  constructor(private consent: ConsentService) {}

  ngOnInit(): void {
    this.show$ = this.consent.showBanner$;
    this.consent.init();
  }

  accept(): void {
    this.consent.accept();
  }

  reject(): void {
    this.consent.reject();
  }
}
