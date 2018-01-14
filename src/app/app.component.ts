import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as rg4js from 'raygun4js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    /*
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Track navigation end
        rg4js('trackEvent', {
          type: 'pageView',
          path: event.url
        });
      } else if (event instanceof NavigationError) {
        // Track navigation error
        alert('hi')
        rg4js('send', {
          error: event.error
        });
      }
    });
    */
  }
}
