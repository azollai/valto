import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('placeInput')
  public searchElementRef: ElementRef;
  public searchControl: FormControl;

  public gpsEmitter: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
    this.gpsEmitter = new EventEmitter<any>();
    this.searchControl = new FormControl();
  }

}
