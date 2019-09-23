import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // public car: Car = new Car()
  @Input() car: Car
  constructor() { }

  ngOnInit() {
  }

}
