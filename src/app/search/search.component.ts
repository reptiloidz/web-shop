import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.servise';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  isSearchActive = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchActive$.subscribe(isActive => {
      this.isSearchActive = isActive;
    });
  }

  closeSearch(): void {
    this.searchService.setSearchActive(false);
  }
}
