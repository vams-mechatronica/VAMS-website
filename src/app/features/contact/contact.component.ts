import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
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
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private title: Title,
    private meta: Meta
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Contact Us | VAMS Mechatronica');
    this.meta.updateTag({
      name: 'description',
      content: 'Get in touch with VAMS Mechatronica for industrial automation, IIoT and Industry 4.0 consultations.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us | VAMS Mechatronica' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      this.contactService.submitContactForm(this.contactForm.value)
        .subscribe({
          next: () => {
            this.successMessage = 'Message sent successfully!';
            this.contactForm.reset();
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
    }
    this.contactForm.reset();
  }
}

