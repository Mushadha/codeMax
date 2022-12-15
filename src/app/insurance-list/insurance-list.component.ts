import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Insurance } from '../model/insurance-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css'],
})
export class InsuranceListComponent implements OnInit {
  insuranceList!: Array<Insurance>;
  constructor(
    private dataService: DataService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.insuranceList = this.dataService.insurance;
    console.log(this.dataService.insurance);
  }
  book(id: any) {
    this.sharedService.insuranceID = id;
    this.router.navigate(['/form']);
  }
}
