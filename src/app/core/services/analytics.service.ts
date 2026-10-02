import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export type ConsentState = 'granted' | 'denied';

/**
 * Google Analytics 4 (gtag.js) with Consent Mode v2, loaded client-side only
 * — gtag has no business running during server-side prerendering, and doing
 * so would also double-count the initial page load there.
 *
 * Consent Mode: `init()` sets every signal to 'denied' before gtag.js is even
 * asked to load, as Google's docs require the default to be set first. No
 * analytics cookies are written and hits are sent in a limited, cookie-less
 * form until `updateConsent('granted')` is called — which only happens from
 * the cookie banner, or immediately on boot if the visitor already chose
 * "Accept" on a previous visit (see ConsentService).
 *
 * `send_page_view` is off in the base config because this is a client-side
 * routed SPA: without it, GA only ever sees the first URL the app boots on,
 * since gtag.js itself is never reloaded on in-app navigation. `trackPageView`
 * is called once per route change instead (see AppComponent).
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private static readonly MEASUREMENT_ID = 'G-DF68NRRZMW';

  private initialized = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  init(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) return;
    this.initialized = true;

    // Must be pushed before the gtag.js script tag is even added — Google's
    // Consent Mode requires the default to be set first so nothing is ever
    // sent (or stored) under an assumed-granted state.
    this.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500,
    });

    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${AnalyticsService.MEASUREMENT_ID}`;
    this.doc.head.appendChild(script);

    this.gtag('js', new Date());
    this.gtag('config', AnalyticsService.MEASUREMENT_ID, { send_page_view: false });
  }

  /** Called by ConsentService once the visitor has made (or previously made) a choice. */
  updateConsent(state: ConsentState): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.gtag('consent', 'update', { analytics_storage: state });
  }

  trackPageView(path: string, title?: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // NavigationEnd fires before the newly-activated route's component has
    // run ngOnInit, which is what actually updates document.title (via
    // SeoService) — reading it synchronously here would report the
    // *previous* page's title. Deferring a tick lets that settle first.
    setTimeout(() => {
      this.gtag('event', 'page_view', {
        page_path: path,
        page_location: this.doc.defaultView!.location.href,
        page_title: title ?? this.doc.title,
      });
    });
  }

  /** Generic custom event — CTA clicks, form submissions, etc. */
  trackEvent(name: string, params?: Record<string, unknown>): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.gtag('event', name, params);
  }

  private gtag(...args: unknown[]): void {
    const win = this.doc.defaultView;
    if (!win) return;
    // Self-sufficient on purpose: any caller (including a page-view fired
    // before init() has run, e.g. due to component init ordering) can safely
    // queue onto dataLayer — gtag.js processes the backlog once it loads.
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(args);
  }
}
