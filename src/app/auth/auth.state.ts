import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as firebase from 'firebase';
import { FinishSignupModel, SignupModel } from './models/signup';
import { LoginModel } from './models/login';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {
  FinishUserMetaModel,
  SendFinishUserMetaModel,
  SendUserMetaModel,
  StartUserMetaModel
} from './models/user-meta';

export const START_LOADING = '[Auth] START_LOADING';
export const STOP_LOADING = '[Auth] STOP_LOADING';
export const START_EMAIL_SIGNUP = '[Auth] START_EMAIL_SIGNUP';
export const START_SOCIAL_SIGNUP = '[Auth] START_SOCIAL_SIGNUP';
export const FINISH_SOCIAL_SIGNUP = '[Auth] FINISH_SOCIAL_SIGNUP';
export const START_EMAIL_LOGIN = '[Auth] START_EMAIL_LOGIN';
export const START_SOCIAL_LOGIN = '[Auth] START_SOCIAL_LOGIN';
export const START_LOGOUT = '[Auth] START_LOGOUT';
export const SET_AUTHENTICATED = '[Auth] SET_AUTHENTICATED';
export const UNSET_AUTHENTICATED = '[Auth] UNSET_AUTHENTICATED';
export const SET_TOKEN = '[Auth] SET_TOKEN';
export const DELETE_TOKEN = '[Auth] DELETE_TOKEN';

export interface AuthStateModel {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string;
  userId: string;
}

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

export class SetAuthenticated {
  static readonly type = SET_AUTHENTICATED;

  constructor(public payload: string) { }
}

export class UnsetAuthenticated {
  static readonly type = UNSET_AUTHENTICATED;
}

export class SetToken {
  static readonly type = SET_TOKEN;

  constructor(public payload: string) { }
}

export class DeleteToken {
  static readonly type = DELETE_TOKEN;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoading: false,
    isAuthenticated: false,
    token: null,
    userId: null
  }
})
export class AuthState {

  constructor(private router: Router) { }

  @Selector()
  static isLoading(state: AuthStateModel) {
    return state.isLoading;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }

  @Action(SetToken)
  setToken({ patchState }: StateContext<AuthStateModel>, { payload }: SetToken) {
    patchState({
      token: payload
    });
  }

  @Action(DeleteToken)
  deleteToken({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      token: null
    });
  }

  @Action(StartLoading)
  startLoading({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      isLoading: true
    });
  }

  @Action(StopLoading)
  stopLoading({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      isLoading: false
    });
  }

  @Action(SetAuthenticated)
  setAuthenticated({ patchState }: StateContext<AuthStateModel>, { payload }: SetAuthenticated) {
    patchState({
      isAuthenticated: true,
      userId: payload
    });
  }

  @Action(UnsetAuthenticated)
  unsetAuthenticated({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      isAuthenticated: false
    });
  }

  @Action(StartEmailSignup)
  startEmailSignup({ dispatch }: StateContext<AuthStateModel>, { payload }: StartEmailSignup) {
    dispatch(new StartLoading());
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password))
      .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
      })
      .subscribe(token => {
        const userId = firebase.auth().currentUser.uid;
        dispatch([
            new SetToken(token),
            new SetAuthenticated(userId)
          ]
        );
        const userMeta: SendUserMetaModel = {
          birthDate: payload.birthDate.getTime(),
          firstName: payload.firstName,
          graduation: payload.graduation,
          lastName: payload.lastName,
          location: payload.location
        };
        firebase.database().ref('users/' + userId).set(userMeta)
                .then(result => {
                  console.log('db done', result);
                  dispatch(new StopLoading());
                })
                .catch(error => {
                  console.error('db error', error);
                  dispatch(new StopLoading());
                });
      }, () => dispatch(new StopLoading()));
  }

  @Action(StartSocialSignup)
  startSocialSignup({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const userId = firebase.auth().currentUser.uid;
      const userMeta: StartUserMetaModel = {
        firstName: result.additionalUserInfo.profile.first_name,
        lastName: result.additionalUserInfo.profile.last_name
      };
      firebase.database().ref('users/' + userId).set(userMeta)
              .then(() => {
                console.log('db manipulated');
              })
              .catch(error => console.error('db error', error));
      this.router.navigate(['finish-signup']);
      dispatch(new StopLoading());
    }).catch((error) => {
      dispatch(new StopLoading());
      console.error(error);
    });
  }

  @Action(FinishSocialSignup)
  finishSocialSignup({ dispatch }: StateContext<AuthStateModel>, { payload }: FinishSocialSignup) {
    const userId = firebase.auth().currentUser.uid;
    dispatch(new SetAuthenticated(userId));
    const userMeta: SendFinishUserMetaModel = {
      birthDate: payload.birthDate.getTime(),
      graduation: payload.graduation,
      location: payload.location
    };
    firebase.database().ref('users/' + userId).update(userMeta)
            .then(result => {
              console.log('db manipulated');
              dispatch(new StopLoading());
            })
            .catch(error => {
              console.error('db error', error);
              dispatch(new StopLoading());
            });
  }

  @Action(StartLogout)
  startLogout({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    firebase.auth().signOut()
            .then(() => {
              dispatch([
                new UnsetAuthenticated(),
                new StopLoading()]);
            });
  }

  @Action(StartEmailLogin)
  startEmailLogin({ dispatch }: StateContext<AuthStateModel>, { payload }: StartEmailLogin) {
    dispatch(new StartLoading());
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
              dispatch([
                new StopLoading(),
                new SetAuthenticated(firebase.auth().currentUser.uid)
              ]);
            })
            .catch(error => {
              dispatch(new StopLoading());
            });
  }

  @Action(StartSocialLogin)
  startSocialLogin({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
            .then(() => dispatch(new StopLoading()))
            .catch(() => dispatch(new StopLoading()));
  }
}
