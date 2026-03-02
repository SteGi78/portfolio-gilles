import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(private scroll: ScrollService) {}

  goTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
