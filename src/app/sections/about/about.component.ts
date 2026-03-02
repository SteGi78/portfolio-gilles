import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TPipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private scroll: ScrollService) {}

  goTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
