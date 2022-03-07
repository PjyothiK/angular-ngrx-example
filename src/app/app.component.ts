import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public store: Store<any>) {}
  count;
  ngOnInit() {
    this.store.select('count').subscribe((c) => {
      this.count = c;
    });
  }
  inc() {
    this.store.dispatch(increment());
  }
  dec() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
