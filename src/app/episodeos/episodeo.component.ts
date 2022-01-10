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
  currentUrl!: string;

  constructor(private serv: ApiServiceService) {}

  ngOnInit(): void {
    this.getEpisodeos();
  }

  getEpisodeos() {
    this.serv.getApiEpisodeos().subscribe(
      (data) => {
        this.getEpisodeosSuccess = data;
        this.currentUrl = 'https://rickandmortyapi.com/api/episode';
      },
      (error) => {
        this.getEpisodeosError = error;
      }
    );
  }
  NextPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.next;
      this.serv.ButtonPageCharacter(pageInfo.next).subscribe(
        (data) => {
          this.getEpisodeosSuccess = data;
        },
        (error) => {
          this.getEpisodeosError = error;
        }
      );
    });
  }
  PrevPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.prev;
      this.serv.ButtonPageCharacter(pageInfo.prev).subscribe(
        (data) => {
          this.getEpisodeosSuccess = data;
        },
        (error) => {
          this.getEpisodeosError = error;
        }
      );
    });
  }
}
