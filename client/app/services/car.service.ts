import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../shared/models/car.model';
import { Make } from '../shared/models/make.model';
import { Model } from '../shared/models/model.model';
import { Style } from '../shared/models/style.model';
import { Condition } from '../shared/models/condition.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('/api/cars');
  }

  countCars(): Observable<number> {
    return this.http.get<number>('/api/cars/count');
  }

  addCar(car: Car): Observable<Car> {
      console.log("Add car: " + JSON.stringify(car))
    return this.http.post<Car>('/api/car', car);
  }

  getCar(car: Car): Observable<Car> {
    return this.http.get<Car>(`/api/car/${car._id}`);
  }

  editCar(car: Car): Observable<any> {
    return this.http.put(`/api/car/${car._id}`, car, { responseType: 'text' });
  }

  deleteCar(car: Car): Observable<any> {
    return this.http.delete(`/api/car/${car._id}`, { responseType: 'text' });
  }

  getMakes(): Observable<Make[]> {
    return this.http.get<Make[]>('/api/makes');
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('/api/models');
  }

  getStyles(): Observable<Style[]> {
    return this.http.get<Style[]>('/api/styles');
  }

  getConditions(): Observable<Condition[]> {
    return this.http.get<Condition[]>('/api/conditions');
  }

}
