import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { SearchComponent } from './search/search.component';
import { NgIf } from '@angular/common';
import { SearchService } from './search/search.servise';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AccordionComponent, SearchComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'my-app';

	constructor(private searchService: SearchService) {}

	toggleSearch(): void {
	this.searchService.setSearchActive(true);
	}
}
