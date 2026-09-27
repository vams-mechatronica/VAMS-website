import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { APP_ORDER, APP_PAGES, AppPageContent } from '../promonitor.content';

/** One template for every ProMonitor application page; the route's `slug` picks the content. */
@Component({
  selector: 'app-promonitor-app',
  standalone: false,
  templateUrl: './promonitor-app.component.html',
  styleUrl: './promonitor-app.component.scss',
})
export class PromonitorAppComponent implements OnInit {
  page!: AppPageContent;
  others: AppPageContent[] = [];

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['slug'] as string;
    this.page = APP_PAGES[slug];
    this.others = APP_ORDER.filter((s) => s !== slug).map((s) => APP_PAGES[s]);
    this.seo.set({
      title: this.page.seo.title,
      description: this.page.seo.description,
      path: `/promonitor/${slug}`,
    });
  }
}
