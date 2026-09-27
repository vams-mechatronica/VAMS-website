import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * Route-change feedback: a slim progress bar at the top of the page, plus a
 * branded overlay that only appears if a route takes noticeably long to load
 * (so fast navigations don't flash a spinner).
 */
@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss'],
  standalone: false,
})
export class LoaderSpinnerComponent implements OnInit, OnDestroy {
  /** Bar is shown (loading or finishing). */
  active = false;
  /** Bar is at 100% and fading out. */
  done = false;
  /** Slow-load overlay is shown. */
  slow = false;

  private sub?: Subscription;
  private slowTimer?: ReturnType<typeof setTimeout>;
  private hideTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) this.start();
      else if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) this.finish();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.clear();
  }

  private start(): void {
    this.clear();
    this.done = false;
    this.active = true;
    this.slowTimer = setTimeout(() => {
      this.slow = true;
      this.cdr.markForCheck();
    }, 500);
    this.cdr.markForCheck();
  }

  private finish(): void {
    if (!this.active) return;
    this.clear();
    this.slow = false;
    this.done = true;
    this.hideTimer = setTimeout(() => {
      this.active = false;
      this.done = false;
      this.cdr.markForCheck();
    }, 400);
    this.cdr.markForCheck();
  }

  private clear(): void {
    clearTimeout(this.slowTimer);
    clearTimeout(this.hideTimer);
  }
}
