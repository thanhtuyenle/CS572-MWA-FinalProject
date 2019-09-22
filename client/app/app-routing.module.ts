import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CarsComponent } from './cars/cars.component';
import { AccountComponent } from './account/account.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UsercarsComponent } from './usercars/usercars.component';

const routes: Routes = [
 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'usercars', component: UsercarsComponent },
  { path: 'cardetails', component: CarDetailsComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
