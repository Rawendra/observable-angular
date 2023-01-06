import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showActivate: boolean;
  showActivateSubject: boolean;
  subscription: Subscription;
  subscriptionSubject: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(
      (value: boolean) => {
        this.showActivate = value;
      }
    );
    this.subscriptionSubject = this.userService.activatedFromSubject.subscribe(
      (val: boolean) => {
        this.showActivateSubject = val;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSubject.unsubscribe();
  }
}
