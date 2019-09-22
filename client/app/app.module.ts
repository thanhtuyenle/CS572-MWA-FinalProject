import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//modules
import { SharedModule } from './shared/shared.module';

//services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
// import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthGuardLogin } from './services/auth-guard-login.service';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';
import { AccountComponent } from './account/account.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}
//   return localStorage.getItem('token');
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CarsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // imports UI modules
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,

    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatListModule],
  // providers: [UserService,AuthService],
  providers: [UserService,AuthService,AuthGuardLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }