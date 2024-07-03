import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, switchMap } from 'rxjs';
import { MyApiService } from '../my-api.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements AfterViewInit {
  content: string = '';
  list: any[] = [];

  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  constructor(private myApiService: MyApiService) {}

  ngAfterViewInit(): void {
    this.initializeSearch();
  }

  private initializeSearch(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      switchMap(() => this.myApiService.myList(this.content))
    ).subscribe((res: any) => {
      this.list = res.data;
    });
  }
}
