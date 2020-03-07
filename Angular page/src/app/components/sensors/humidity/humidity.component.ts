import { Component, OnInit } from '@angular/core';

import {SensorService} from '../../../services/sensor.service';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {

  sensorList: Sensor[]

  constructor(public sensorService: SensorService) { }

  ngOnInit() {
    return this.sensorService.getHumidity()
      .snapshotChanges().subscribe(item => {
        this.sensorList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          this.sensorList.push(x as Sensor);
        });
      });
  }

}
