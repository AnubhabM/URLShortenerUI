import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/restClient.service'

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  bigUrl: any;
  shortUrl: any = undefined;

  constructor(private restClient: RestService) { }

  ngOnInit() {
  }

  getShortUrl() {
    if (this.bigUrl) {
      if (this.validateUrl(this.bigUrl)) {
        console.log("sending URl: " + this.bigUrl);
        this.restClient.fetchJsonData();
        this.restClient.fetchSmallUrl(this.bigUrl).toPromise().then(data => {
          console.log("inside fetchSmallUrl");
          console.log(data);
          console.log(data.smallUrl);
          this.shortUrl = data.smallUrl;
        });
      }
      else{
        this.shortUrl = "Enter Any Valid URL";
      }
    }
    else {
      console.log("Enter Url");
      this.shortUrl = "Enter Any URL";
    }
  }

  validateUrl(url: any): boolean {
    var another= /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{1,}){1,3}(#?\/?[a-zA-Z0-9#]+)/;
    return re.test(url);
  }
}
