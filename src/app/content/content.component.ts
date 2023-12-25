import { Component, computed, effect, signal } from '@angular/core';
import { AppService } from '../_shared/services/app.service';
import Project from '../_shared/models/project';
import { filter } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  projects: Project[] = [];

  constructor(private appService: AppService) {
    effect(() => {
      this.projects = this.appService.projects();
      this.applyFilter(this.appService.filterInput());
    });
  }

  applyFilter(filter: string) {
    //filter projects by name, description, and tags
    if (!filter || filter.trim() === '') {
      this.projects = this.appService.projects();
      return;
    }
    this.projects = this.appService.projects().filter((project) => {
      return (
        project.name.toLowerCase().includes(filter.toLowerCase()) ||
        project.description.toLowerCase().includes(filter.toLowerCase()) ||
        project.tags.some((tag) => {
          return tag.toLowerCase().includes(filter.toLowerCase());
        })
      );
    });
  }
}
