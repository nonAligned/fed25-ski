import { Reservation } from './../models/reservation.model';
import { SkiPass } from './../models/skipass.model';
import { Weather } from './../models/weather.model';
import { Track } from './../models/track.model';
import { Resort } from './../models/resort.model';
import { ResortName } from './../models/resortName.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL: string = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class SkiService {

  constructor(private http: HttpClient) { }

  getResorts(): Observable<ResortName[]> {
    return this.http.get<Array<ResortName>>(URL).pipe(map(data => {
      let resortNames = new Array<ResortName>();
      data.forEach(elem => resortNames.push(new ResortName(elem)));
      return resortNames;
    }));
  }

  getResort(id: number): Observable<Resort> {
    return this.http.get(URL + "/" + id).pipe(map(data => {
      return new Resort(data);
    }));
  }

  getTracks(id: number, parameters?: any): Observable<Track[]> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("sort", parameters.sort && parameters.sort.toString() || "")
      }
    }
    return this.http.get<Array<Track>>(URL + "/" + id + "/tracks", queryParams).pipe(map(data => {
      let trackList = new Array<Track>();
      data.forEach(elem => trackList.push(new Track(elem)));
      return trackList;
    }));
  }

  getWeather(id: number):Observable<Weather[]> {
    return this.http.get<Array<Weather>>(URL + "/" + id + "/weather").pipe(map(data => {
      let weatherList = new Array<Weather>();
      data.forEach(elem => weatherList.push(new Weather(elem)));
      return weatherList;
    }));
  }

  getSkipass(id: number):Observable<SkiPass[]> {
    return this.http.get<Array<SkiPass>>(URL + "/" + id + "/skipass").pipe(map(data => {
      let skiPassList = new Array<SkiPass>();
      data.forEach(elem => skiPassList.push(new SkiPass(elem)));
      return skiPassList;
    }));
  }

  postReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.post(URL + "/" + id + "/skipass", reservation).pipe(map( data => {
      return new Reservation(data);
    }));
  }
}
