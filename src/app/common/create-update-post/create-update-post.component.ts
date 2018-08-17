import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LatLngLiteral } from '@agm/core';
import { defaultImage } from '../image-wrapper/default-image.const';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.scss']
})
export class CreateUpdatePostComponent implements OnInit {

  public submitted = false;
  public urls = [defaultImage];
  public chips = [];
  @ViewChild('placeInput')
  public searchElementRef: ElementRef;
  public latLngLiteral: LatLngLiteral;
  public gpsEmitter: EventEmitter<any>;
  imageControl = new FormControl(null, Validators.required);
  searchControl = new FormControl(null, Validators.required);
  detailsControl = new FormControl(null, Validators.required);
  chipControl = new FormControl('', Validators.required);
  searchFormGroup: FormGroup;
  detailsFormGroup: FormGroup;
  chipFormGroup: FormGroup;
  imageFormGroup: FormGroup;

  imageErrorShown = false;

  constructor() { }

  ngOnInit() {
    this.gpsEmitter = new EventEmitter<any>();
    this.searchControl = new FormControl();
    this.initForms();
  }

  centerChange(event: LatLngLiteral) {
    this.latLngLiteral = event;
  }

  fileChosen() {
    this.imageControl.patchValue({ image: 'file chosen' });
  }

  onShare() {
    this.submitted = true;
    // Submit NGXS
  }

  private initForms() {
    this.searchFormGroup = new FormGroup({ search: this.searchControl });
    this.detailsFormGroup = new FormGroup({ details: this.detailsControl });
    this.chipFormGroup = new FormGroup({ chip: this.chipControl });
    this.imageFormGroup = new FormGroup({ image: this.imageControl });
  }
}
