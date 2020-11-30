import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {RouterModule, Routes} from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { GithubFollowerProfileComponent } from './github-follower-profile/github-follower-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: '', component: LoginComponent },
   { path: 'list-user', component: ListUserComponent },
  { path: 'display', component: EditUserComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'googlemap', component: GooglemapComponent },
  { path: 'follower', component: GithubFollowerComponent },
  { path: 'follower/:username', component: GithubFollowerProfileComponent },
  { path: 'test', component: TestingComponent },
  { path: 'user', component: UserComponent},
  { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    GithubFollowerComponent,
    GithubFollowerProfileComponent,
    NavbarComponent,
    // AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    TestingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
