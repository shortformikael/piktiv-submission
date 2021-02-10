import { Component, Input, OnInit } from '@angular/core';
//Form management from @angular
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
//JSON request
import JSONRequest from './example-request.json';

import { InputElement } from './input-element';
import { InputControlService } from './input-control.service'
import { stringify } from '@angular/compiler/src/util';
import { InputService } from './input.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ InputControlService, InputService ]
})
export class RegistrationComponent implements OnInit{
  inputs: InputElement<string>[] = [];

  //Instancing of form controls
  userReg!: FormGroup;

  payLoad = '';

  //Instance of JSON request
  request:{
    first_name:string,
    middle_name:string, 
    last_name:string,
    email:string,
    phone_number:string,
    password:string,
  } = JSONRequest;

  constructor(private ics: InputControlService, service: InputService) { 
    this.inputs = service.getInputs();
    this.userReg = this.ics.toFormGroup(this.inputs);

    //console.log(this.userReg)
    //console.log(this.inputs);
  }

  ngOnInit(): void {
    
  }

  //Function called on submission of form
  onSubmit() {
    this.payLoad = JSON.stringify(this.userReg.getRawValue());
  }

  print() {

    console.log('Printing');
  }

}
