import { CharacterModel } from './../models/characterModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { InfoPageModel } from '../models/infoModel';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(public http: HttpClient) {}

  getApiCharacter(): Observable<any> {
    return this.http
      .get('https://rickandmortyapi.com/api/character')
      .pipe(pluck('results'));
  }
  getApiLocation(): Observable<any> {
    return this.http
      .get('https://rickandmortyapi.com/api/location')
      .pipe(pluck('results'));
  }

  getApiEpisodeos(): Observable<any> {
    return this.http
      .get('https://rickandmortyapi.com/api/episode')
      .pipe(pluck('results'));
  }
  getPageInfo(url: string): Observable<any> {
    return this.http.get(url).pipe(pluck('info'));
  }

  ButtonPageCharacter(url: string): Observable<any> {
    return this.http.get(url).pipe(pluck('results'));
  }
}
