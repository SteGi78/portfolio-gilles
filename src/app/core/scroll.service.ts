import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(private router: Router, private zone: NgZone) {}

  async scrollTo(id: string): Promise<void> {
    const needNavHome = this.router.url !== '/' && !this.router.url.startsWith('/#');

    if (needNavHome) {
      const navDone = firstValueFrom(
        this.router.events.pipe(
          filter((e: unknown) => e instanceof NavigationEnd)
        )
      );

      await this.router.navigateByUrl('/');
      await navDone;
    }

    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.getElementById(id);
          if (!target) {
            return;
          }

          const rootStyle = getComputedStyle(document.documentElement);
          const headerVar = rootStyle.getPropertyValue('--header-h').trim();
          const headerOffset = Number.parseFloat(headerVar) || 64;
          const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;

          window.scrollTo({
            top: Math.max(0, top),
            behavior: 'smooth',
          });
        });
      });
    });
  }
}
