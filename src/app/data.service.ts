import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataCity } from './dataCity.model';
import { Devices } from './devices.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getCitys() {
    return this.http.get<DataCity[]>('https://patatas-air.s3.amazonaws.com/cities');
  }

  getDevices() {
    return this.http.get<Devices[]>('https://patatas-air.s3.amazonaws.com/devices');
  }

}
