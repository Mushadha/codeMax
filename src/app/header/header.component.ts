import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  count: number = 0;
  search: string = '';
  constructor(
    private sharedService: SharedService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.receiveCount().subscribe((res) => {
      this.count = res;
    });

    console.log('count from header', this.count);
  }
  searchCar() {
    this.sharedService.searchTearm = this.search;
    this.router.navigate(['/car']);
    console.log(this.search);
  }
  clearSearch() {
    this.search = '';
  }
}
