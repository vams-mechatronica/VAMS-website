import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnalyticsService, ConsentState } from './analytics.service';

const STORAGE_KEY = 'vams-cookie-consent';

/**
 * Owns the one cookie-consent decision this site asks for (analytics only —
 * there's no ad/remarketing tracking here). The choice is remembered in
 * localStorage so returning visitors aren't asked again; AnalyticsService is
 * the thing that actually applies it via Google Consent Mode.
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {
  /** Whether the banner should be shown; false once a choice exists. */
  readonly showBanner$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private analytics: AnalyticsService,
  ) {}

  /** Call once, on app bootstrap. */
  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.analytics.init();

    const stored = this.readStored();
    if (stored) {
      this.analytics.updateConsent(stored);
    } else {
      this.showBanner$.next(true);
    }
  }

  accept(): void {
    this.choose('granted');
  }

  reject(): void {
    this.choose('denied');
  }

  private choose(state: ConsentState): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, state);
      } catch {
        // Private browsing / storage disabled: the choice just won't be
        // remembered, which is a degraded experience, not a broken one.
      }
    }
    this.analytics.updateConsent(state);
    this.showBanner$.next(false);
  }

  private readStored(): ConsentState | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'granted' || value === 'denied' ? value : null;
    } catch {
      return null;
    }
  }
}
