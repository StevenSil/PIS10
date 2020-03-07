import { Component, OnInit } from '@angular/core';

import {SensorService} from '../../../services/sensor.service';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.css']
})
export class SensorsListComponent implements OnInit {

  sensorList: Sensor[]

  constructor(public sensorService: SensorService) { }

  ngOnInit() {
    return this.sensorService.getValues()
      .snapshotChanges().subscribe(item => {
        this.sensorList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          this.sensorList.push(x as Sensor);
        });
      });
  }


}
