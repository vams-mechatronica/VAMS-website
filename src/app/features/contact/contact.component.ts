import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  loading = false;
  successMessage = '';
  errorMessage = '';
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: [''],
      industry: [''],
      machines: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Contact Us | VAMS Mechatronica',
      description: 'Talk to VAMS Mechatronica about ProMonitor, machine connectivity, industrial automation and Industry 4.0.',
      path: '/contact',
    });
    const subjects: Record<string, string> = {
      demo: 'ProMonitor demo request',
      scheduling: 'Job shop scheduling pilot',
    };
    const subject = subjects[this.route.snapshot.queryParamMap.get('topic') ?? ''];
    if (subject) this.contactForm.patchValue({ subject });
  }

  onSubmit() {
    if (this.contactForm.invalid || this.loading) return;
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';
    const { industry, machines, ...payload } = this.contactForm.value;
    const details = [industry && `Industry: ${industry}`, machines && `Number of machines: ${machines}`].filter(Boolean);
    if (details.length) payload.message = `${payload.message}\n\n${details.join('\n')}`;
    this.contactService.submitContactForm(payload).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully. We will get back to you soon.';
        this.contactForm.reset();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not send your message. Please try again or email info@vamsmechatronica.in.';
        this.loading = false;
      },
    });
  }
}
