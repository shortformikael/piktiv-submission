import { Component, Input, OnInit } from '@angular/core';
//Form management from @angular
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
//JSON request
import JSONRequest from './example-request.json';
import { RegistrationInputComponent } from './registration-input.component'

import { InputElement } from './input-element';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  //Instancing of form controls
  userReg = new FormGroup({});

  //Instance of JSON request
  request:{
    first_name:string,
    middle_name:string, 
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
  } = JSONRequest;



  ngOnInit(): void {
    
  }

  //Function called on submission of form
  onSubmit() {
    
  }

  print() {

    console.log('Printing');
  }

}
