import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FinishSignupModel, SignupModel } from './models/signup';
import { LoginModel } from './models/login';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { SendFinishUserMetaModel, SendUserMetaModel, StartUserMetaModel } from './models/user-meta';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

export const START_LOADING = '[Auth] START_LOADING';
export const STOP_LOADING = '[Auth] STOP_LOADING';
export const START_EMAIL_SIGNUP = '[Auth] START_EMAIL_SIGNUP';
export const START_SOCIAL_SIGNUP = '[Auth] START_SOCIAL_SIGNUP';
export const FINISH_SOCIAL_SIGNUP = '[Auth] FINISH_SOCIAL_SIGNUP';
export const START_EMAIL_LOGIN = '[Auth] START_EMAIL_LOGIN';
export const START_SOCIAL_LOGIN = '[Auth] START_SOCIAL_LOGIN';
export const START_LOGOUT = '[Auth] START_LOGOUT';
export const SET_USER = '[Auth] SET_USER';
export const DELETE_USER = '[Auth] DELETE_USER';

export interface AuthStateModel {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: firebase.User | null;
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

export class SetUser {
  static readonly type = SET_USER;

  constructor(public payload: firebase.User | null) { }
}

export class DeleteUser {
  static readonly type = DELETE_USER;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoading: false,
    isAuthenticated: undefined,
    user: null,
  }
})
export class AuthState {

  constructor(private router: Router,
              private store: Store,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore) {

  }

  @Selector()
  static isLoading(state: AuthStateModel) {
    return state.isLoading;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }

  @Action(SetUser)
  setUser({ patchState }: StateContext<AuthStateModel>, { payload }: SetUser) {
    patchState({
      isAuthenticated: true,
      user: payload
    });
  }

  @Action(DeleteUser)
  deleteUser({ patchState }: StateContext<AuthStateModel>) {
    this.afAuth.auth.signOut().then(() => {
      patchState({
        isAuthenticated: false,
        user: null
      });
      this.router.navigate(['/']);
    }, error => {
      console.error(error);
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

  @Action(StartEmailSignup)
  startEmailSignup({ dispatch }: StateContext<AuthStateModel>, { payload }: StartEmailSignup) {
    dispatch(new StartLoading());
    return fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(payload.email, payload.password))
      .subscribe((user: firebase.User | null) => {
        console.log('mail signup', user);
        const userMeta: SendUserMetaModel = {
          birthDate: payload.birthDate.getTime(),
          firstName: payload.firstName,
          graduation: payload.graduation,
          lastName: payload.lastName,
          location: payload.location
        };
        this.db.collection('users').doc(user.uid).set(userMeta)
            .then(result => {
              this.signIn(user);
              console.log('db done', result);
              dispatch(new StopLoading());
            }, error => {
              console.error('db error', error);
              dispatch(new StopLoading());
            });
      }, error => {
        dispatch(new StopLoading());
        console.error(error);
      });
  }

  @Action(StartSocialSignup)
  startSocialSignup({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(result => {
      const userMeta: StartUserMetaModel = {
        firstName: result.additionalUserInfo.profile.first_name,
        lastName: result.additionalUserInfo.profile.last_name
      };
      this.db.collection('users').doc(result.user.uid).set(userMeta)
          .then(() => {
            console.log('db manipulated');
          })
          .catch(error => console.error('db error', error));
      this.router.navigate(['finish-signup']);
      dispatch(new StopLoading());
    }, error => {
      dispatch(new StopLoading());
      console.error(error);
    });
  }

  @Action(FinishSocialSignup)
  finishSocialSignup({ dispatch }: StateContext<AuthStateModel>, { payload }: FinishSocialSignup) {
    const userMeta: SendFinishUserMetaModel = {
      birthDate: payload.birthDate.getTime(),
      graduation: payload.graduation,
      location: payload.location
    };
    const currentUser = this.afAuth.auth.currentUser;
    this.db.collection('users').doc(currentUser.uid).update(userMeta)
        .then(result => {
          console.log('db manipulated', currentUser);
          this.signIn(currentUser);
          dispatch(new StopLoading());
        }, error => {
          console.error('db error', error);
          dispatch(new StopLoading());
        });
  }

  @Action(StartLogout)
  startLogout({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    this.afAuth.auth.signOut()
        .then(() => {
          dispatch([
            new DeleteUser(),
            new StopLoading()
          ]);
          this.router.navigate(['welcome']);
        });
  }

  @Action(StartEmailLogin)
  startEmailLogin({ dispatch }: StateContext<AuthStateModel>, { payload }: StartEmailLogin) {
    dispatch(new StartLoading());
    this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((user: firebase.User | null) => {
          dispatch([
            new StopLoading(),
            new SetUser(user)
          ]);
          this.signIn(user);
        }, error => {
          console.error(error);
          dispatch(new StopLoading());
        });
  }

  @Action(StartSocialLogin)
  startSocialLogin({ dispatch }: StateContext<AuthStateModel>) {
    dispatch(new StartLoading());
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
        .then(response => {
          dispatch([new StopLoading(), new SetUser(response.user)]);
          this.signIn(response.user);
        }, error => {
          console.error(error);
          dispatch(new StopLoading());
        });
  }

  private signIn(user: firebase.User | null) {
    this.store.dispatch(new SetUser(user));
    this.router.navigate(['test']);
  }
}
