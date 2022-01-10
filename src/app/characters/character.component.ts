import { ApiServiceService } from '../services/ApiService.service';
import { CharacterModel } from './../models/characterModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  constructor(private serv: ApiServiceService) {}

  characterSuccess!: CharacterModel[];
  characterError!: string;
  currentUrl!: string;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.serv.getApiCharacter().subscribe(
      (data) => {
        this.characterSuccess = data;
        this.currentUrl = 'https://rickandmortyapi.com/api/character';
      },
      (error) => {
        this.characterError = error;
      }
    );
  }

  NextPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.next;
      this.serv.ButtonPageCharacter(pageInfo.next).subscribe(
        (data) => {
          this.characterSuccess = data;
        },
        (error) => {
          this.characterError = error;
        }
      );
    });
  }

  PrevPage() {
    this.serv.getPageInfo(this.currentUrl).subscribe((pageInfo) => {
      this.currentUrl = pageInfo.prev;
      this.serv.ButtonPageCharacter(pageInfo.prev).subscribe(
        (data) => {
          this.characterSuccess = data;
        },
        (error) => {
          this.characterError = error;
        }
      );
    });
  }
}
