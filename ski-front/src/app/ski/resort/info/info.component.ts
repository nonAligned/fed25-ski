import { Resort } from './../../../models/resort.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ski-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() resort: Resort;

  constructor() { }

  ngOnInit(): void {
  }

}
