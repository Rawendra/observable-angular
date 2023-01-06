import { Observable } from "rxjs";
export const observable = Observable.create((observer) => {
  let count = 0;
  setInterval(() => {
    observer.next(count++);
    if (count == 6) {
      observer.complete();
    }
    if (count > 3) {
      observer.error(new Error("greater than three"));
    }
  }, 1000);
});

export const decoratorObj = {
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
};
