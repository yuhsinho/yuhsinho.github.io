import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    SkillsComponent,
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
