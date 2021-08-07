import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title!: String;

  upper() {
    this.title = this.title.toUpperCase();
  }
}
