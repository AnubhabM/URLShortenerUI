import { Component } from '@angular/core';

import { RestService } from './services/restClient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonData;
  constructor(private restService: RestService){}
  title = 'ShURL';
  fetchJsonData(){
    this.restService.fetchJsonData().subscribe(val => this.jsonData=val);

    
  }
}
