import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  isLoading = true;
  constructor(private router: Router,private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUser(this.auth.currentUser).subscribe(
      data => this.user = data,
      error => console.error(error),
      () => this.isLoading = false
    )
  }

  save(user: User){
    this.userService.editUser(user).subscribe(
      res => {console.log('account settings saved!')
      this.router.navigate(['/'])},//this.toast.setMessage('account settings saved!', 'success'),
      error => console.log(error)
    )
  }
}
