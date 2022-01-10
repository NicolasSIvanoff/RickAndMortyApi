import { ApiEpisodeModel } from './../models/episodeModel';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/ApiService.service';

@Component({
  selector: 'episodeos',
  templateUrl: './episodeo.component.html',
  styleUrls: ['./episodeo.component.scss'],
})
export class EpisodeoComponent implements OnInit {
  getEpisodeosSuccess!: ApiEpisodeModel[];
  getEpisodeosError!: string;

  constructor(private serv: ApiServiceService) {}

  ngOnInit(): void {
    this.getEpisodeos();
  }

  getEpisodeos() {
    this.serv.getApiEpisodeos().subscribe(
      (data) => {
        this.getEpisodeosSuccess = data;
      },
      (error) => {
        this.getEpisodeosError = error;
      }
    );
  }
}
