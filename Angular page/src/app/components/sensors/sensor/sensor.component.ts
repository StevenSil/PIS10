import { Component, OnInit } from '@angular/core';
import {SensorService} from '../../../services/sensor.service';
import { NgForm } from '@angular/forms';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  constructor(public sensorService: SensorService) {

  }

  ngOnInit(): void {
    this.sensorService.getValues();
    this.resetForm();
  }

  onSubmit(sensorForm: NgForm){
    console.log(sensorForm.value);
    this.sensorService.insertValue(sensorForm.value);
    this.resetForm(sensorForm);
  }

  resetForm(sensorForm?: NgForm){
    if(sensorForm != null){
      sensorForm.reset();
      this.sensorService.selectValue = new Sensor();
    }
  }

}
