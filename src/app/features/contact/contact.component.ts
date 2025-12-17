import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading = false;
  successMessage = '';
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
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

