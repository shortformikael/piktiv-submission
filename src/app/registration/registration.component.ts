import { Component, Input, OnInit } from '@angular/core';
//Form management from @angular
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

import { InputElement } from './input-element';
import { InputControlService } from './input-control.service';
import { InputService } from './input.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ InputControlService, InputService ]
})
export class RegistrationComponent{

  inputs: InputElement<string>[] = [];

  //Instancing of form controls
  userReg: FormGroup;

  constructor(private ics: InputControlService, inputService: InputService, private cookieService:CookieService) { 
    this.inputs = inputService.getInputs();
    this.userReg = this.ics.toFormGroup(this.inputs);
  }

  //Function called on submission of form
  onSubmit() {
    this.cookieService.deleteAll;
    this.cookieService.set('first_name', this.userReg.controls['first_name'].value);
  }
}
