import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import * as authActions from '../../state/auth.action';
import { PasswordValidators } from 'ngx-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Select() isLoading$: Observable<boolean>;

  public form: FormGroup;
  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(6),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1)
  ]);

  constructor(private store: Store) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  socialSignIn() {
    this.store.dispatch(new authActions.StartSocialLogin());
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(new authActions.StartEmailLogin({
        email: this.form.value.email,
        password: this.form.value.password,
      }));
    }
  }

}
