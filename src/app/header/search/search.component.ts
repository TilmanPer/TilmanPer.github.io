import { Component, effect } from '@angular/core';
import { AppService } from 'src/app/_shared/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  filter = '';
  constructor(private appService: AppService) {
    effect(() => {
      this.filter = this.appService.filterInput();
    });
  }

  updateFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value;
    this.appService.filterInput.update(() => filter);
    //scroll to top
  }

  clearFilter() {
    this.appService.filterInput.update(() => '');
  }
}
