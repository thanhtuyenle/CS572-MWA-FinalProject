import {AfterViewChecked, Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // template: `
  // <app-login>Login</app-login>
  // <app-register>Register</app-register>
  // `
})
export class AppComponent  implements AfterViewChecked {
  title = 'carmanagement';
  constructor(public auth: AuthService, private changeDetector: ChangeDetectorRef) { }
    ngAfterViewChecked() {
      this.changeDetector.detectChanges();
    }
}
