import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  /** Route path, e.g. '/promonitor' — used for the canonical and og:url. */
  path: string;
  /** Absolute URL or a path under the site root. Defaults to the site share image. */
  image?: string;
}

/**
 * One place for per-page metadata. Uses updateTag (not addTags) so navigating
 * between routes replaces tags instead of stacking duplicates on top of the
 * ones in index.html.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  static readonly SITE_URL = 'https://vamsmechatronica.in';
  private static readonly DEFAULT_IMAGE = '/assets/images/promonitor_share.jpg';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  set(config: SeoConfig): void {
    const url = SeoService.SITE_URL + (config.path === '/' ? '/' : config.path);
    const image = this.absolute(config.image ?? SeoService.DEFAULT_IMAGE);

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.setCanonical(url);
  }

  private absolute(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
    return SeoService.SITE_URL + (pathOrUrl.startsWith('/') ? pathOrUrl : '/' + pathOrUrl);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
