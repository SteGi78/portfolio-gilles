import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../i18n/t.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TPipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
