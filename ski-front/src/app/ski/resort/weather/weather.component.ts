import { Weather } from './../../../models/weather.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ski-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather[];

  constructor() { }

  ngOnInit(): void {
  }

}
