import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminFeedbacksComponent } from './admin-container/admin-feedbacks/admin-feedbacks.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    AdminContainerComponent,
    AdminFeedbacksComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
