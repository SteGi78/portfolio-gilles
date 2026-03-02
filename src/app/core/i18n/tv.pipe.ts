import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from './i18n.service';

/**
 * Value pipe for i18n JSON values (arrays/objects) in templates.
 * Use when you need *ngFor over translated lists etc.
 */
@Pipe({
  name: 'tv',
  standalone: true,
  pure: false,
})
export class TVPipe implements PipeTransform {
  constructor(private readonly i18n: I18nService) {}

  transform<T = unknown>(key: string): T {
    return this.i18n.value<T>(key);
  }
}
