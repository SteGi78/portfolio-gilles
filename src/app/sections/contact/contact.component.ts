import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly email = 'gilles-stephan@gmx.de';
  copied = false;
  submitted = false;

  readonly form = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    message: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
    privacy: this.fb.control(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  constructor(private readonly fb: NonNullableFormBuilder) {}

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied = true;
      window.setTimeout(() => {
        this.copied = false;
      }, 1200);
    } catch {
      this.copied = false;
    }
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio-Anfrage: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);

    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }
}
