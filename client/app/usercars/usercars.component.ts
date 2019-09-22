import { Component, OnInit } from '@angular/core';

import { Car } from '../shared/models/car.model';
import { CarService } from '../services/car.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-usercars',
  templateUrl: './usercars.component.html',
  styleUrls: ['./usercars.component.css']
})
export class UsercarsComponent implements OnInit {

  cars: Car[] = [];
  isLoading = true;
  constructor(private carService: CarService,private router: Router) { }

  ngOnInit() {
  }

  getCars() {
    this.carService.getCars().subscribe(
      data => this.cars = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  viewCar(car: Car) {
    this.carService.getCar(car).subscribe(
      data => this.router.navigate(['/cardetails']),
      error => console.log(error)
    )
  }
}
