import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { observable } from './utils';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private customsubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.subscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    this.customsubscription = observable
      .pipe(
        filter((data: number) => {
          return data % 2 == 0;
        }),
        map((data: number) => {
          return `the number is ${data}`;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('the process terminated successfully');
        }
      );
  }

  ngOnDestroy() {
    this.customsubscription.unsubscribe();
  }
}
