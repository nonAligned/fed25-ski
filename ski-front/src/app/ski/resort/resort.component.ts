import { Reservation } from './../../models/reservation.model';
import { SkiPass } from './../../models/skipass.model';
import { Weather } from './../../models/weather.model';
import { Observable, forkJoin } from 'rxjs';
import { Track } from './../../models/track.model';
import { SkiService } from './../../services/ski.service';
import { Resort } from './../../models/resort.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ski-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit {
  id: number;
  resort: Resort;
  tracks: Track[];
  weather: Weather[];
  skiPass: SkiPass[];
  parameters = {
    sort: "rating"
  }
  success: boolean = false;
  fail: boolean = false;

  constructor(private service: SkiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.success = false;
      this.fail = false;
      forkJoin(
        this.service.getResort(this.id),
        this.service.getTracks(this.id, this.parameters),
        this.service.getWeather(this.id),
        this.service.getSkipass(this.id)
      ).subscribe(response => {
        this.resort = response[0];
        this.tracks = response[1];
        this.weather = response[2];
        this.skiPass = response[3];
      });
    });
  }

  updateSort(newSort: string) {
    this.parameters.sort = newSort;
    this.service.getTracks(this.id, this.parameters).subscribe(data => {
      this.tracks = data;
    });
  }

  makeReservation(newReservation: Reservation) {
    this.service.postReservation(this.id, newReservation).subscribe(
      data => {
        this.success = true;
    },
      error => {
        this.fail = true;
      }
    );
  }

  close(type: string) {
    if (type == "success") {
      this.success = false;
    } else if (type == "fail") {
      this.fail = false;
    }
  }

}
