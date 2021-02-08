import { Component, OnInit } from '@angular/core';
//Form management
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
//JSON request
import JSONRequest from './example-request.json';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  //Instancing of form controls
  userReg = this.fb.group({
    first_name: ['', Validators.required],
    middle_name: [''],
    last_name: [''],
    email: [''],
    phone_number: [''],
    password: ['', Validators.required]
  });

  //Instance of JSON request
  request:{
    first_name:string,
    middle_name:string, 
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
  } = JSONRequest;

  constructor(private fb: FormBuilder) { }

  //Function called on submission of form
  onSubmit() {
    console.warn(this.userReg.value);
  }

}
