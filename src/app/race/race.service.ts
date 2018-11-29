import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class RaceService {
  // constructor() {
  constructor(private httpClient: HttpClient) {
    console.log('RaceService consturctor called..');
  }

  getRaces(): Observable<any> {
    return this.httpClient.get('assets/races.json',
      {responseType: 'json'});
  }

/*  getRacesPromise() : Promise<Race[]> {
    return this.httpClient.get('assets/races.json')
      .toPromise()
      .then(res => res['racesData'])
      .catch(err => console.log('Error 발생', err));
  }*/
}
