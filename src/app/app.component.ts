import { Component } from '@angular/core';
import * as dataJson from '../assets/data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Hello Kor Angular';
  data = dataJson;

  constructor() {
    console.log(this.data);
  }
}
