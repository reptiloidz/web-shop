import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchActive = new BehaviorSubject<boolean>(false);

  searchActive$ = this.searchActive.asObservable();

  setSearchActive(isActive: boolean): void {
    this.searchActive.next(isActive);
  }
}