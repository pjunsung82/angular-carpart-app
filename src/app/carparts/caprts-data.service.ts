import {Inject, Injectable} from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';

//@Injectable({
//   providedIn : 'root'
// })
// app.module.ts에
// providers: [CarpartsDataService], 안해줘도 된다.
@Injectable({
  providedIn : 'root'
})
export class CarpartsDataService {
  constructor() {
    console.log('CarpartsDataService consturctor called..');
  }

  getCarParts() {
    return CARPARTS; // CARPARTS 상수
  }
}
