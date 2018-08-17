import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as authActions from '../../auth/ngxs/auth.classes';
import { AuthState } from '../../auth/ngxs/auth.state';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<boolean>;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private store: Store) { }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.store.dispatch(new authActions.DeleteUser());
  }
}
