import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TPipe],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {
  email = 'gilles-stephan@gmx.de';
}
