import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-academy-impact',
  standalone: true,
  imports: [TPipe],
  templateUrl: './academy-impact.component.html',
  styleUrls: ['./academy-impact.component.scss'],
})
export class AcademyImpactComponent {
  constructor(private scroll: ScrollService) {}

  goTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
