import { Track } from './../../../models/track.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() tracks: Track[];
  @Output() sortChange: EventEmitter<string> = new EventEmitter();
  sort: string = "rating";

  constructor() { }

  ngOnInit(): void {
  }

  sortChanged() {
    this.sortChange.emit(this.sort);
  }

}
