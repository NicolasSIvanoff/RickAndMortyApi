import { locationModel } from './../models/locationModel';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/ApiService.service';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  getLocationSuccess!: locationModel[];
  getLocationError!: string;
  constructor(private serv: ApiServiceService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.serv.getApiLocation().subscribe(
      (data) => {
        this.getLocationSuccess = data;
      },
      (error) => {
        this.getLocationError = error;
      }
    );
  }
}
