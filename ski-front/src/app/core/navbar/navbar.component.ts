import { SkiService } from './../../services/ski.service';
import { ResortName } from './../../models/resortName.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  resortNames: ResortName[];

  constructor(private service: SkiService) { }

  ngOnInit(): void {
    this.service.getResorts().subscribe(data => {
      this.resortNames = data;
    });
  }

}
