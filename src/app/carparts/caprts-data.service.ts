import {Inject, Injectable} from '@angular/core';
import {CarPart} from './car-part';
import {HttpClient} from '@angular/common/http';

import {CARPARTS} from './mocks';
import {Observable} from 'rxjs';

//@Injectable({
//   providedIn : 'root' // 6버전 부터
// })
// app.module.ts에
// providers: [CarpartsDataService], 안해줘도 된다.
// 5버전까지 이렇게 했다.
@Injectable({
  providedIn : 'root'
})
export class CarpartsDataService {
  // constructor() {
  constructor(private httpClient: HttpClient) {
    console.log('CarpartsDataService consturctor called..');
  }

/*  getCarParts() {
    return CARPARTS; // CARPARTS 상수
  }*/

  getCarParts(): Observable<any> {
    return this.httpClient.get('assets/car-part.json',
      {responseType: 'json'});
  }
}
