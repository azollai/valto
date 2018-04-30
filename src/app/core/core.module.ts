import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

    [SidenavListComponent, HeaderComponent]
  ],
  providers: []
})
export class CoreModule {}