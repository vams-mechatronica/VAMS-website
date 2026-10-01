import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  private sub?: Subscription;

  constructor(private router: Router, private analytics: AnalyticsService) {}

  ngOnInit(): void {
    // AnalyticsService.init() is called by <app-cookie-consent> (ConsentService),
    // since Consent Mode's default signals must be set before gtag.js loads.

    // gtag.js only fires a pageview for the URL the script tag loads on; every
    // subsequent in-app navigation needs to be reported explicitly.
    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.analytics.trackPageView(e.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
