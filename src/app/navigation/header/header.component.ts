import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import * as authActions from '../../auth/ngxs/auth.classes';
import { AuthState } from '../../auth/ngxs/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<boolean>;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private store: Store) {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.store.dispatch(new authActions.DeleteUser());
  }
}
