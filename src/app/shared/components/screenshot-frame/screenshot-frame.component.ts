import {
  AfterViewInit, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Framed product screenshot that works before the image exists.
 *
 * Drop the real file at `src/assets/promonitor/<file>` and it replaces the
 * placeholder automatically — no code change. Until then a neutral, clearly
 * labelled placeholder is shown (never a fabricated UI).
 *
 * Load state is also checked after view init: the pages are prerendered, so a
 * `load`/`error` that fired before hydration would otherwise be missed.
 */
@Component({
  selector: 'app-screenshot-frame',
  standalone: false,
  templateUrl: './screenshot-frame.component.html',
  styleUrl: './screenshot-frame.component.scss',
})
export class ScreenshotFrameComponent implements AfterViewInit {
  /** File name under assets/promonitor/, e.g. 'monitoring-machine.webp'. */
  @Input({ required: true }) file!: string;
  @Input() alt = '';
  /** Short label shown inside the placeholder, e.g. 'Machine live telemetry'. */
  @Input() label = 'ProMonitor screenshot';
  /** Name shown in the frame's title bar. */
  @Input() brand = 'ProMonitor';

  @ViewChild('img') img?: ElementRef<HTMLImageElement>;

  ready = false;
  failed = false;
  expanded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  get src(): string {
    return `assets/promonitor/${this.file}`;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.img?.nativeElement;
    if (el?.complete) {
      // Deferred a tick so we don't change bindings mid-check.
      setTimeout(() => (el.naturalWidth > 0 ? (this.ready = true) : (this.failed = true)));
    }
  }

  open(): void {
    if (this.ready) this.expanded = true;
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.expanded = false;
  }
}
