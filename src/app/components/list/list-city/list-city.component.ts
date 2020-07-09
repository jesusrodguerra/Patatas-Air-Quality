import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  totals = [{itemCount: 1 }, {itemCount: 2}, {itemCount: 3}, {itemCount: 4}];

  city = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'country',
    'normalDeviceCount',
    'warningDeviceCount',
    'alertDeviceCount'
  ];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.fetchCity();
  }

  fetchCity() {
    this.dataService.getCitys().subscribe(citys => {
      console.log(citys);
      this.city = citys;
    });
  }

  totalNormal() {
    const result = this.city.reduce((acc, val) => acc += val.NormalDevicesCount, 0);
    return result;
  }

  totalWarning() {
    const result = this.city.reduce((acc, val) => acc += val.WarningDevicesCount, 0);
    return result;
  }

  totalAlert() {
    const result = this.city.reduce((acc, val) => acc += val.AlertDevicesCount, 0);
    return result;
  }


}
