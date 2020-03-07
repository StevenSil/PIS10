import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Sensor} from '../models/sensor'
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  valueList: AngularFireList<any>;
  selectValue: Sensor = new Sensor();
  constructor(private firebase: AngularFireDatabase) {}
    getValues(){
      return this.valueList = this.firebase.list('Sensor/Temperatura');
    }
    getHumidity(){
      return this.valueList = this.firebase.list('Sensor/Humedad');
    }
    insertValue(sensor: Sensor){
      console.log(sensor.$value);
      this.valueList.push({
        value: 1
      })
    }
}
