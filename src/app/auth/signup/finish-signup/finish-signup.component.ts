import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import * as authActions from '../../ngxs/auth.classes';
import { LatLngLiteral } from '@agm/core';
import { PasswordValidators } from 'ngx-validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finish-signup',
  templateUrl: './finish-signup.component.html',
  styleUrls: ['./finish-signup.component.scss']
})
export class FinishSignupComponent implements OnInit {
  maxDate = new Date(new Date().getFullYear() - 13, 1, 1);
  submitPressed: boolean;
  @Select() isLoading$: Observable<boolean>;
  // levels = [
  //   { name: 'Kevesebb, mint 8 általános', value: 0 },
  //   { name: 'Általános iskola', value: 1 },
  //   { name: 'Középiskola', value: 2 },
  //   { name: 'Felső oktatás', value: 3 }
  // ];
  levels = [
    { name: 'Less than Primary School', value: 0 },
    { name: 'Primary School', value: 1 },
    { name: 'Secondary School', value: 2 },
    { name: 'High School', value: 3 },
    { name: 'Higher Education', value: 4 }
  ];

  @ViewChild('placeInput')
  public searchElementRef: ElementRef;
  public latLngLiteral: LatLngLiteral;
  public gpsEmitter: EventEmitter<any>;

  public form: FormGroup;
  birthDateControl = new FormControl(null,
    [
      Validators.required
    ]);
  graduationControl = new FormControl(null, Validators.required);
  searchControl = new FormControl(null, Validators.required);
  agreeControl = new FormControl(null, Validators.requiredTrue);


  constructor(private store: Store) {
  }

  ngOnInit() {
    this.gpsEmitter = new EventEmitter<any>();
    this.searchControl = new FormControl();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      birthDate: this.birthDateControl,
      graduation: this.graduationControl,
      search: this.searchControl,
      agree: this.agreeControl
    });
  }

  centerChange(event: LatLngLiteral) {
    this.latLngLiteral = event;
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new authActions.FinishSocialSignup({
        birthDate: this.form.value.birthDate,
        graduation: this.form.value.graduation,
        location: this.latLngLiteral
      }));
    }
  }

}
