import { FinishSignupModel, SignupModel } from '../models/signup';
import { LoginModel } from '../models/login';
import {
  DELETE_USER,
  FINISH_SOCIAL_SIGNUP, SET_USER, START_EMAIL_LOGIN,
  START_EMAIL_SIGNUP,
  START_LOADING, START_LOGOUT, START_SOCIAL_LOGIN,
  START_SOCIAL_SIGNUP,
  STOP_LOADING
} from './auth.consts';
import * as firebase from 'firebase';

export class StartLoading {
  static readonly type = START_LOADING;
}

export class StopLoading {
  static readonly type = STOP_LOADING;
}

export class StartEmailSignup {
  static readonly type = START_EMAIL_SIGNUP;

  constructor(public payload: SignupModel) { }
}

export class StartSocialSignup {
  static readonly type = START_SOCIAL_SIGNUP;
}

export class FinishSocialSignup {
  static readonly type = FINISH_SOCIAL_SIGNUP;

  constructor(public payload: FinishSignupModel) { }
}

export class StartEmailLogin {
  static readonly type = START_EMAIL_LOGIN;

  constructor(public payload: LoginModel) { }
}

export class StartSocialLogin {
  static readonly type = START_SOCIAL_LOGIN;
}

export class StartLogout {
  static readonly type = START_LOGOUT;
}

export class SetUser {
  static readonly type = SET_USER;

  constructor(public payload: firebase.User | null) { }
}

export class DeleteUser {
  static readonly type = DELETE_USER;
}
