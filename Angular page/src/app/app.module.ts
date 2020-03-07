import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import {SensorComponent} from './components/sensors/sensor/sensor.component';
import {SensorsComponent} from './components/sensors/sensors.component';
import {SensorsListComponent} from './components/sensors/sensors-list/sensors-list.component';

import {SensorService} from './services/sensor.service';

import {FormsModule} from '@angular/forms';
import { HumidityComponent } from './components/sensors/humidity/humidity.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    SensorsComponent,
    SensorsListComponent,
    HumidityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
