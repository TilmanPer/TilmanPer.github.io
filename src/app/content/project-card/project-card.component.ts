import { Component, Input } from '@angular/core';
import Project from 'src/app/_shared/models/project';
import { AppService } from 'src/app/_shared/services/app.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project = new Project();
  isClicked = false;

  constructor(private appService: AppService) {}

  openProject() {
    window.open(this.project.link, '_blank');
  }

  setClicked() {
    this.isClicked = true;
  }

  setNotClicked(event?: MouseEvent) {
    7;
    //if event is context menu, prevent default
    if (event && event.button === 2) {
      event.preventDefault();
    }
    this.isClicked = false;
  }

  filterBy(filter: string) {
    this.appService.filterInput.update(() => filter);
    window.scrollTo(0, 0);
  }
}
