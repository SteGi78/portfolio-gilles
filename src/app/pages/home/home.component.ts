import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { JourneyComponent } from '../../sections/journey/journey.component';
import { AcademyImpactComponent } from '../../sections/academy-impact/academy-impact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, AcademyImpactComponent, SkillsComponent, ProjectsComponent, JourneyComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
