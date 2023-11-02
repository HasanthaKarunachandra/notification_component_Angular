import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  faChevronDown=faChevronDown;
  faTrashAlt=faTrashAlt;

  currentDate = new Date();

  notifications:Array<any>= [
    {"url":"https://firebasestorage.googleapis.com/v0/b/amourlink-c9723.appspot.com/o/about%2Fgirl.png?alt=media&token=c0f7d98d-f660-4bd3-bb48-24781877dabe&_gl=1*1ubs6q*_ga*MTgxODQ3NTkxNC4xNjk3NzAzNDY1*_ga_CW55HF8NVT*MTY5ODY3MjI3OS44LjEuMTY5ODY3MjM2Mi41Ni4wLjA", "name" : "Hasantha", "status":"Friend Request"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/amourlink-1d0ee.appspot.com/o/Relationship-Goals%201.png?alt=media&token=308341c8-ef27-402d-a68e-64428554f896&_gl=1*1qoscz7*_ga*MTM4NTc5NjQ0Mi4xNjk3MTMxODU0*_ga_CW55HF8NVT*MTY5ODc0NDY5Mi4yNy4xLjE2OTg3NDU0NDguNjAuMC4w", "name" : "Wasana", "status":"Message"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
