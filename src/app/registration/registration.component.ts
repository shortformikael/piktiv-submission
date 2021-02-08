import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import JSONRequest from './example-request.json';
import { Validators } from '@angular/forms' 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userReg = this.fb.group({
    first_name: ['', Validators.required],
    middle_name: [''],
    last_name: [''],
    email: [''],
    phone_number: [''],
    password: ['', Validators.required]
  });

  request:{
    first_name:string,
    middle_name:string, 
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
  } = JSONRequest;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.userReg.value);
  }

  ngOnInit(): void {
  }

}
