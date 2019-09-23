import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchCarForm: FormGroup
  constructor(private formBuilder: FormBuilder)  { }

  ngOnInit() {
    this.searchCarForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }
  search() {

  }
}
