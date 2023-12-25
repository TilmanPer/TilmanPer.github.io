import { Injectable, computed, signal } from '@angular/core';
import Project from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public projects = signal<Project[]>([]);

  public filterInput = signal<string>('');

  constructor() {
    this.importProjectsFromJson('/assets/projects.json');
  }

  public addProject(project: Project) {
    this.projects.mutate((currentProjects) => {
      currentProjects.push(project);
    });
  }

  public removeProject(project: Project) {
    this.projects.mutate((currentProjects) => {
      const index = currentProjects.findIndex((p) => p.id === project.id);
      if (index > -1) {
        currentProjects.splice(index, 1);
      }
    });
  }

  importProjectsFromJson(path: string) {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        this.projects.update(() => data.projects);
      });
  }
}
