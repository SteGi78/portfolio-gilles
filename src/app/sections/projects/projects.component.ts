import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { SetupComponent } from '../setup/setup.component';

type ProjectTab = 'academy' | 'private' | 'setup';

type Link = {
  labelKey: string;
  url: string;
  external: boolean;
};

type AcademyProject = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  bulletsKeys: string[];
  tags: string[];
  cover: string;
  highlight?: boolean;
  links: Link[];
};

type PrivateProject = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  images: string[];
  highlight?: boolean;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TPipe, SetupComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly tab = signal<ProjectTab>('academy');
  readonly selectedId = signal<string>('join');

  readonly title = computed(() =>
    this.tab() === 'academy'
      ? 'projects.tabs.academyTitle'
      : this.tab() === 'private'
        ? 'projects.tabs.privateTitle'
        : 'setup.title'
  );

  readonly intro = computed(() =>
    this.tab() === 'academy'
      ? 'projects.tabs.academyIntro'
      : this.tab() === 'private'
        ? 'projects.tabs.privateIntro'
        : 'setup.lead'
  );

  readonly academyProjects: readonly AcademyProject[] = [
    {
      id: 'join',
      titleKey: 'projects.academy.join.title',
      subtitleKey: 'projects.academy.join.subtitle',
      bulletsKeys: [
        'projects.academy.join.b1',
        'projects.academy.join.b2',
        'projects.academy.join.b3',
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'Git/GitHub'],
      cover: 'assets/projects/join-cover.svg',
      highlight: true,
      links: [
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/join-angular',
          external: true,
        },
      ],
    },
    {
      id: 'pokedex',
      titleKey: 'projects.academy.pokedex.title',
      subtitleKey: 'projects.academy.pokedex.subtitle',
      bulletsKeys: [
        'projects.academy.pokedex.b1',
        'projects.academy.pokedex.b2',
        'projects.academy.pokedex.b3',
      ],
      tags: ['Angular', 'TypeScript', 'REST API', 'Responsive'],
      cover: 'assets/projects/pokedex-cover.svg',
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/pokedex-angular/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/pokedex-angular',
          external: true,
        },
      ],
    },
    {
      id: 'elpollo',
      titleKey: 'projects.academy.elpollo.title',
      subtitleKey: 'projects.academy.elpollo.subtitle',
      bulletsKeys: [
        'projects.academy.elpollo.b1',
        'projects.academy.elpollo.b2',
        'projects.academy.elpollo.b3',
      ],
      tags: ['JavaScript', 'Canvas', 'OOP', 'HTML', 'CSS'],
      cover: 'assets/projects/el-pollo-cover.svg',
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/El-Pollo-Loco-Final/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/El-Pollo-Loco-Final',
          external: true,
        },
      ],
    },
    {
      id: 'portfolio',
      titleKey: 'projects.academy.portfolio.title',
      subtitleKey: 'projects.academy.portfolio.subtitle',
      bulletsKeys: [
        'projects.academy.portfolio.b1',
        'projects.academy.portfolio.b2',
        'projects.academy.portfolio.b3',
      ],
      tags: ['Angular', 'TypeScript', 'i18n', 'SCSS'],
      cover: 'assets/projects/portfolio-cover.svg',
      links: [
        {
          labelKey: 'projects.links.live',
          url: 'https://stegi78.github.io/portfolio-gilles/',
          external: true,
        },
        {
          labelKey: 'projects.links.code',
          url: 'https://github.com/SteGi78/portfolio-gilles',
          external: true,
        },
      ],
    },
  ];

  readonly privateProjects: readonly PrivateProject[] = [
    {
      id: 'icodome',
      titleKey: 'projects.private.icodome.title',
      subtitleKey: 'projects.private.icodome.subtitle',
      descKey: 'projects.private.icodome.desc',
      images: [
        'assets/private/icodome-1.png',
        'assets/private/icodome-2.png',
        'assets/private/icodome-3.png',
      ],
      highlight: true,
    },
  ];

  readonly selected = computed(() =>
    this.academyProjects.find((project) => project.id === this.selectedId()) ?? this.academyProjects[0]
  );

  setTab(next: ProjectTab): void {
    this.tab.set(next);
  }

  select(id: string): void {
    this.selectedId.set(id);
  }

  trackById(_index: number, project: { id: string }): string {
    return project.id;
  }
}
