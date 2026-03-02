import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TPipe } from '../../core/i18n/t.pipe';
import { TVPipe } from '../../core/i18n/tv.pipe';

@Component({
  selector: 'app-icodome',
  standalone: true,
  imports: [CommonModule, RouterModule, TPipe, TVPipe],
  templateUrl: './icodome.component.html',
  styleUrls: ['./icodome.component.scss'],
})
export class IcodomeComponent {
  readonly pdfHref = 'assets/docs/icodome-vorentwurf-2020.pdf';
  readonly images = [
    'assets/private/icodome-1.png',
    'assets/private/icodome-2.png',
    'assets/private/icodome-3.png',
  ];
  readonly pdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Angular sanitizes iframe src; we explicitly trust our own local asset URL.
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfHref);
  }
}
