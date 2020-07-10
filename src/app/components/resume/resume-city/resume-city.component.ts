import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resume-city',
  templateUrl: './resume-city.component.html',
  styleUrls: ['./resume-city.component.css']
})
export class ResumeCityComponent implements OnInit {

  devices = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices() {
    this.dataService.getDevices().subscribe(devices => {
      console.log(devices);
      this.devices = devices;
    });
  }

}
