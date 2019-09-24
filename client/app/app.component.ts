import {AfterViewChecked, Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewChecked {
  title = 'carmanagement';
  public favoriteCounter: string = '0';
  constructor(public auth: AuthService, private changeDetector: ChangeDetectorRef
              ) { 
                this.favoriteCounter = localStorage.getItem('counterFav')
              }
    ngAfterViewChecked() {
      this.changeDetector.detectChanges();
    }
}
