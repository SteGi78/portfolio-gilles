import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollService } from '../../core/scroll.service';

type SkillGroup = {
  titleKey: string;
  itemKeys: string[];
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(private scroll: ScrollService) {}

  goTo(id: string): void {
    this.scroll.scrollTo(id);
  }

  groups: SkillGroup[] = [
    {
      titleKey: 'skills.frontend',
      itemKeys: [
        'skills.items.angular',
        'skills.items.ts',
        'skills.items.js',
        'skills.items.html',
        'skills.items.scss',
        'skills.items.responsive',
      ],
    },
    {
      titleKey: 'skills.tools',
      itemKeys: [
        'skills.items.git',
        'skills.items.vscode',
        'skills.items.devtools',
        'skills.items.npm',
        'skills.items.rest',
      ],
    },
    {
      titleKey: 'skills.workflow',
      itemKeys: [
        'skills.items.clean',
        'skills.items.components',
        'skills.items.refactoring',
        'skills.items.team',
      ],
    },
  ];

  techIcons = [
    { icon: 'assets/icons/skills/html.png', labelKey: 'skills.icons.html' },
    { icon: 'assets/icons/skills/css.png', labelKey: 'skills.icons.css' },
    { icon: 'assets/icons/skills/javascript.png', labelKey: 'skills.icons.javascript' },
    { icon: 'assets/icons/skills/typescript.png', labelKey: 'skills.icons.typescript' },
    { icon: 'assets/icons/skills/angular.png', labelKey: 'skills.icons.angular' },
    { icon: 'assets/icons/skills/firebase.png', labelKey: 'skills.icons.firebase' },
    { icon: 'assets/icons/skills/git.png', labelKey: 'skills.icons.git' },
    { icon: 'assets/icons/skills/rest-api.png', labelKey: 'skills.icons.rest' },
    { icon: 'assets/icons/skills/scrum.png', labelKey: 'skills.icons.scrum' },
    { icon: 'assets/icons/skills/material-design.png', labelKey: 'skills.icons.material' },
    { icon: 'assets/icons/skills/growth-mindset.png', labelKey: 'skills.icons.growth' },
  ];
}
