import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeCookie:string | undefined;

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    this.welcomeCookie = "Welcome " + this.cookieService.get('first_name');
    if(!this.welcomeCookie) {
      this.welcomeCookie = "You need to register!";
    }
  }

}
