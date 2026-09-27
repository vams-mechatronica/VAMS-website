import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { CASE_DETAILS, CaseDetail } from '../case-studies.content';

@Component({
  selector: 'app-case-detail',
  standalone: false,
  templateUrl: './case-detail.component.html',
  styleUrl: './case-detail.component.scss',
})
export class CaseDetailComponent implements OnInit {
  study!: CaseDetail;
  readonly others: CaseDetail[] = [];

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['slug'] as string;
    this.study = CASE_DETAILS[slug];
    this.others.push(...Object.values(CASE_DETAILS).filter((c) => c.slug !== slug));
    this.seo.set({
      title: `${this.study.title} | Case Study | VAMS Mechatronica`,
      description: this.study.seoDescription,
      path: `/case-studies/${slug}`,
    });
  }
}
