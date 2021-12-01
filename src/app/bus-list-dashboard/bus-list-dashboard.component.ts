import { Component, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-bus-list-dashboard',
  templateUrl: './bus-list-dashboard.component.html',
  styleUrls: ['./bus-list-dashboard.component.css']
})
export class BusListDashboardComponent implements OnInit {
title = 'Bus Availablity Dashboard';
  constructor(private titleService:Title,
    private meta:Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
