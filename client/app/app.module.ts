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
  MatGridListModule,
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
import { CarService } from './services/car.service';
import { UsercarsComponent } from './usercars/usercars.component';

import { HomeComponent } from './home/home.component';


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
    AccountComponent,
    UsercarsComponent,
    HomeComponent
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
    MatGridListModule,

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
    MatGridListModule,
    MatListModule],
  // providers: [UserService,AuthService],
  providers: [UserService,AuthService,AuthGuardLogin, CarService],

  bootstrap: [AppComponent]
})
export class AppModule { }
