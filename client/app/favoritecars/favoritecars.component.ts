import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';
import { Car } from '../shared/models/car.model';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../shared/store/appState';
import { INIT_FAVORITE_CARS } from '../shared/store/actions';

@Component({
  selector: 'app-favoritecars',
  templateUrl: './favoritecars.component2.html',
  styleUrls: ['./favoritecars.component.css']
})
export class FavoritecarsComponent implements OnInit {
  // public cars: Car[] = []
  @select() favoriteCars: Car[];
 
  constructor(private carService: CarService, private auth: AuthService, 
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.getFavCars()
  }

  getFavCars() {
    this.carService.getFavoriteCars(this.auth.currentUser._id).subscribe(
      data => {
        // this.cars = data;
        this.ngRedux.dispatch({
          type: INIT_FAVORITE_CARS,
          payload: data
      });
      // initFavoriteCarsAction(data));
        console.dir(data)
      },
      error => console.dir(error),
      () => {console.log('loaded all cars')}
    );
  }
}
