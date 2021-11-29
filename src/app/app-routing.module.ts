import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoListComponent } from './pages/info-list/info-list.component';
import { CategoriesListComponent } from './pages/post/categories-list/categories-list.component';
import { CategoriesComponent } from './pages/post/categories/categories.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostComponent } from './pages/post/post/post.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserComponent } from './pages/user/user/user.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'info-visit', component: InfoListComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'categories-list', component: CategoriesListComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
