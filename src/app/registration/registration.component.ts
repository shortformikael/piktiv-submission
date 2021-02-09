import { Component, OnInit } from '@angular/core';
//Form management
import { FormControl, FormGroup, Validators } from '@angular/forms';
//JSON request
import JSONRequest from './example-request.json';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  //Instancing of form controls
  userReg = new FormGroup({
    first_name: new FormControl(''),
    middle_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    password: new FormControl('', Validators.required)
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
  ngOnInit(): void {
    
  }

  get password() { return this.userReg.get('password'); }

  //Function called on submission of form
  onSubmit() {
    
  }

  print() {
    
  }

}
