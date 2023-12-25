import { Component } from '@angular/core';
import { AppService } from 'src/app/_shared/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private appService: AppService) {}

  updateFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value;
    this.appService.filterInput.update(() => filter);
  }
}
