import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  colorScheme = signal('light');

  constructor() {
    if (window.matchMedia) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      this.colorScheme.set(darkModeMediaQuery.matches ? 'dark' : 'light');
      darkModeMediaQuery.addEventListener('change', (e) => {
        this.colorScheme.set(e.matches ? 'dark' : 'light');
      });
    }
  }
}
