import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.scss']
})
export class FeedFilterComponent implements OnInit {

  @Input() chips = [];
  orderMethod: string;
  filterOn = false;

  chipControl = new FormControl('', Validators.required);
  orderMethods: string[] = ['Newest', 'Most rated'];
  regions: string[] = ['Budapest', 'London'];
  allChips: string[] = ['Chip 1', 'Chip 2', 'Asd'];

  constructor() {
  }

  ngOnInit() {
    // NGXS get content of filters
  }

  filter() {
    // NGXS query
    // chips = ...
  }

  reset() {
    this.chips = [];
    this.orderMethod = undefined;
  }
}
