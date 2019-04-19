import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './module/core/component/welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/no-auth.guard';
import { PageNotFoundComponent } from './module/core/component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [NoAuthGuard] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [NoAuthGuard] },
  { path: 'test', loadChildren: './module/test/test.module#TestModule', canLoad: [AuthGuard] },
  { path: 'news-feed', loadChildren: './module/news-feed/news-feed.module#NewsFeedModule', canLoad: [AuthGuard] },
  { path: 'my-feed', loadChildren: './module/my-feed/my-feed.module#MyFeedModule', canLoad: [AuthGuard] },
  { path: 'create-post', loadChildren: './module/create-post/create-post.module#CreatePostModule', canLoad: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
  // { path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, NoAuthGuard]
})

export class AppRoutingModule {

}
