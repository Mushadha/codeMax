import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent implements OnInit {
  formDetails!: FormGroup;
  insuranceId!: number;
  carId!: number;
  insuranceData: any;
  carData!: any;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.insuranceId = this.sharedService.insuranceID;
    this.carId = this.sharedService.carID;
    this.getInsurance(this.insuranceId);

    this.getCar(this.carId);
    this.initForm();
  }

  initForm() {
    this.formDetails = this.formBuilder.group({
      car_model: [this.carData?.model],
      car_name: [this.carData?.name],
      insu_name: [this.insuranceData?.name],
      insu_premium: [this.insuranceData?.premium],
    });
  }
  getInsurance(id: number) {
    this.insuranceData = this.dataService.insurance.find(
      (insurance) => insurance.id === id
    );
    console.log(this.insuranceData);
  }
  getCar(id: number) {
    this.carData = this.dataService.cars.find((car) => car.id === id);
    console.log('selected car:', this.carData);
  }
  onSubmit() {}
}
