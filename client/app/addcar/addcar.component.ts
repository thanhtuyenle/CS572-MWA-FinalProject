import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarService } from '../services/car.service';
import { Car } from '../shared/models/car.model';
import { Make } from '../shared/models/make.model';
import { Model } from '../shared/models/model.model';
import { Style } from '../shared/models/style.model';
import { Condition } from '../shared/models/condition.model';
import { Dealer } from '../shared/models/dealer.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  //for comboboxes
  public allMakes: Make[] = []
  public allModels: Model[] = []
  public allStyles: Style[] = []
  public allConditions: Condition[] = []
  public allDealers: Dealer[] = []

  //for upload image
  fileToUpload: File = null;

  addCarForm: FormGroup;

  make = new FormControl('', Validators.required);
  model = new FormControl('', Validators.required);
  style = new FormControl('', Validators.required);
  condition = new FormControl('', Validators.required);
  dealer = new FormControl('', Validators.required);
  year = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  mileage = new FormControl('', Validators.required);
  imagePath = new FormControl('', Validators.required);
  zipCode = new FormControl('', Validators.required);
  // car : Car;
  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddcarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public carService: CarService) { }

  ngOnInit() {
    this.addCarForm = this.formBuilder.group({
      make: this.make,
      model: this.model,
      style: this.style,
      condition: this.condition,
      dealer: this.dealer,
      year: this.year,
      price: this.price,
      mileage: this.mileage,
      // imagePath: new FormControl(''),
      zipCode: this.zipCode      
    });
    this.getAllModels();
  }

  getAllModels(){
    this.carService.getMakes().subscribe(
      data => this.allMakes = data,
      error => console.log(error),
      // () => this.isLoading = false
    );
    this.carService.getModels().subscribe(
      data => this.allModels = data,
      error => console.log(error),
      // () => this.isLoading = false
    );
    this.carService.getStyles().subscribe(
      data => this.allStyles = data,
      error => console.log(error),
      // () => this.isLoading = false
    );
    this.carService.getConditions().subscribe(
      data => this.allConditions = data,
      error => console.log(error),
      // () => this.isLoading = false
    );

    this.carService.getDealers().subscribe(
      data => this.allDealers = data,
      error => console.log(error),
      // () => this.isLoading = false
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.addCarForm.value);
    this.event.emit({data: this.addCarForm.value});
    this.dialogRef.close();
  }

}
