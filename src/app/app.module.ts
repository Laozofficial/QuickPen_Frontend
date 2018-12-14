import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PoliciesComponent } from './policies/policies.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { IndexNavComponent } from './index/index-nav/index-nav.component';
import { NewappComponent } from './newapp/newapp.component';
import { UnknownpageComponent } from './unknownpage/unknownpage.component';
import { EditappComponent } from './editapp/editapp.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: LogoutComponent },
  { path: 'login', component: HomeComponent },
  { path: 'newapp', component: NewappComponent },
  { path: 'dashboard/:id', component: EditappComponent },
  { path: '**', component: UnknownpageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    TermsComponent,
    TeamComponent,
    SettingsComponent,
    ServicesComponent,
    ProfileComponent,
    PoliciesComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    LogoutComponent,
    RegisterComponent,
    IndexComponent,
    LoginComponent,
    IndexNavComponent,
    NewappComponent,
    UnknownpageComponent,
    EditappComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
