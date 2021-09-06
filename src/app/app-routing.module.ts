import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { LoginComponent } from './login/login.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { AdminFeedbacksComponent } from './admin-container/admin-feedbacks/admin-feedbacks.component';
import { AdminUsersComponent } from './admin-container/admin-users/admin-users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserContainerComponent },
  {
    path: 'admin',
    component: AdminContainerComponent,
    children: [
      { path: '', redirectTo: 'feedbacks', pathMatch: 'prefix' },
      { path: 'feedbacks', component: AdminFeedbacksComponent },
      { path: 'users', component: AdminUsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
