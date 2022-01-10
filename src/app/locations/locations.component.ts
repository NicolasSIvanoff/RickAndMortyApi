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
  currentUrl!: string;
  constructor(private serv: ApiServiceService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.serv.getApiLocation().subscribe(
      (data) => {
        this.getLocationSuccess = data;
        this.currentUrl = 'https://rickandmortyapi.com/api/location';
      },
      (error) => {
        this.getLocationError = error;
      }
    );
  }
  NextPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.next;
      this.serv.ButtonPageCharacter(pageInfo.next).subscribe(
        (data) => {
          this.getLocationSuccess = data;
        },
        (error) => {
          this.getLocationError = error;
        }
      );
    });
  }
  PrevPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.prev;
      this.serv.ButtonPageCharacter(pageInfo.prev).subscribe(
        (data) => {
          this.getLocationSuccess = data;
        },
        (error) => {
          this.getLocationError = error;
        }
      );
    });
  }
}
