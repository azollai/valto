import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import * as authActions from '../auth.state';
import { LatLngLiteral } from '@agm/core';
import { PasswordValidators } from 'ngx-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
  lastNameControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
  firstNameControl = new FormControl(null, [Validators.required, Validators.minLength(2)]);
  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  birthDateControl = new FormControl(null,
    [
      Validators.required
    ]);
  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(6),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1)]);
  confirmPasswordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(6),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1)]);
  graduationControl = new FormControl(null, Validators.required);
  searchControl = new FormControl(null, Validators.required);
  agreeControl = new FormControl(null, Validators.requiredTrue);

  constructor(private store: Store) { }

  ngOnInit() {
    this.gpsEmitter = new EventEmitter<any>();
    this.searchControl = new FormControl();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      lastName: this.lastNameControl,
      firstName: this.firstNameControl,
      email: this.emailControl,
      birthDate: this.birthDateControl,
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl,
      graduation: this.graduationControl,
      search: this.searchControl,
      agree: this.agreeControl
    }, PasswordValidators.mismatchedPasswords('password', 'confirmPassword'));
  }

  centerChange(event: LatLngLiteral) {
    this.latLngLiteral = event;
  }

  socialSignup() {
    this.store.dispatch(new authActions.StartSocialSignup());
  }

  onSubmit() {
    if (this.form.valid) {
      // console.log('FORM', this.form.value);
      this.store.dispatch(new authActions.StartEmailSignup({
        email: this.form.value.email,
        password: this.form.value.password,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        birthDate: this.form.value.birthDate,
        graduation: this.form.value.graduation,
        location: this.latLngLiteral
      }));
    }
  }
}
