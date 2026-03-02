import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {
  readonly keys = ['past', 'now', 'future'] as const;
  index = 1; // start at "now"

  prev(): void {
    this.index = (this.index - 1 + this.keys.length) % this.keys.length;
  }

  next(): void {
    this.index = (this.index + 1) % this.keys.length;
  }

  get currentKey(): string {
    return this.keys[this.index];
  }
}
