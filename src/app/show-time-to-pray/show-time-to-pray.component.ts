import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-time-to-pray',
  templateUrl: './show-time-to-pray.component.html',
  styleUrls: ['./show-time-to-pray.component.css']
})
export class ShowTimeToPrayComponent implements OnInit, OnDestroy {

  date: Date = new Date();


  @Input() timesForPraying:any = [];
  @Input() timeToPrayDaily:any = [];

  times = ["İmsak","Güneş","Öğle","İkindi","Akşam","Yatsı"];


  constructor() { }

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
    this.time = new Date();
  }, 1000);

}
  ngOnDestroy() {
    clearInterval(this.intervalId);
}

}
