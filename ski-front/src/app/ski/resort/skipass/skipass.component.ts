import { Reservation } from './../../../models/reservation.model';
import { SkiPass } from './../../../models/skipass.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ski-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.css']
})
export class SkipassComponent implements OnInit {
  @Input() skiPass: SkiPass[];
  @Output() reserve: EventEmitter<Reservation> = new EventEmitter();
  reservation: Reservation;
  reservationForm: FormGroup;
  today: Date = new Date();
  minDateFrom = {
    year: this.today.getFullYear(),
    month: this.today.getMonth()+1,
    day: this.today.getDate()
  }
  maxDateFrom = {
    year: null,
    month: null,
    day: null
  }
  minDateTo = {
    year: this.today.getFullYear(),
    month: this.today.getMonth()+1,
    day: this.today.getDate()
  }
  dayDifference: number;

  

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.reservationForm.reset();
  }

  createForm() {
    this.reservationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateFrom: [{}, Validators.required],
      dateTo: [{}, Validators.required]
    });
  }

  onSubmit() {
    this.reservation = this.reservationForm.value;

    this.reservation.mountain_id = this.skiPass[0].mountain_id;

    let ngbDateFrom = this.reservationForm.controls['dateFrom'].value;
    this.reservation.dateFrom = new Date(ngbDateFrom.year, ngbDateFrom.month, ngbDateFrom.day).toISOString();
    
    let ngbDateTo = this.reservationForm.controls['dateTo'].value;
    this.reservation.dateTo = new Date(ngbDateTo.year, ngbDateTo.month, ngbDateTo.day).toISOString();

    this.reservation.price = String(this.dayDifference * Number(this.skiPass[0].price));

    this.reserve.emit(this.reservation);
    this.reservationForm.reset();
  }

  dateFromChange() {
    let ngbDate = this.reservationForm.controls['dateFrom'].value;
    this.minDateTo.year = ngbDate.year;
    this.minDateTo.month = ngbDate.month;
    this.minDateTo.day = ngbDate.day;
    if (this.reservationForm.controls['dateTo'].dirty) {
      this.calculateDiff(this.minDateTo, this.maxDateFrom);
    }

  }

  dateToChange() {
    let ngbDate = this.reservationForm.controls['dateTo'].value;
    this.maxDateFrom.year = ngbDate.year;
    this.maxDateFrom.month = ngbDate.month;
    this.maxDateFrom.day = ngbDate.day;
    if (this.reservationForm.controls['dateFrom'].dirty) {
      this.calculateDiff(this.minDateTo, this.maxDateFrom);
    }
  }

  calculateDiff(dateFrom, dateTo) {
    this.dayDifference = Math.floor((Date.UTC(dateTo.year, dateTo.month, dateTo.day) - Date.UTC(dateFrom.year, dateFrom.month, dateFrom.day)) / (1000 * 60 * 60 * 24));
  }

}
