import { Component, OnInit } from '@angular/core';
import JSONRequest from './example-request.json';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  request:{
    first_name:string,
    middle_name:string, 
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
  } = JSONRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
