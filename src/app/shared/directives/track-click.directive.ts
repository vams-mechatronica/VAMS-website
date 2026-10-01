import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../core/services/analytics.service';

/**
 * Drop `appTrackClick` on any CTA, nav link, download, tel:/mailto: link or
 * button to fire a GA4 `cta_click` event — no per-element wiring needed.
 *
 * The label is read from the element's own text by default (trimmed,
 * collapsed, capped), so most usages are just the bare attribute:
 *   <a class="btn primary" routerLink="/contact" appTrackClick>Talk to Our Experts</a>
 *
 * Pass a value only when the visible text wouldn't make sense on its own in
 * a report (e.g. a bare icon button): appTrackClick="Close mobile menu".
 */
@Directive({ selector: '[appTrackClick]', standalone: false })
export class TrackClickDirective {
  @Input('appTrackClick') label = '';

  constructor(
    private el: ElementRef<HTMLElement>,
    private analytics: AnalyticsService,
    private router: Router,
  ) {}

  @HostListener('click')
  onClick(): void {
    const el = this.el.nativeElement;
    const label = this.label || el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100) || el.getAttribute('aria-label') || '(unlabelled)';
    const destination = el.getAttribute('href') || null;

    this.analytics.trackEvent('cta_click', {
      cta_label: label,
      cta_destination: destination,
      page_path: this.router.url,
    });
  }
}
