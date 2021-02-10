import { Component, Input, OnInit } from '@angular/core';
//Form management from @angular
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

import { InputElement } from './input-element';

@Component({
  selector: 'app-input',
  templateUrl: './registration-input.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationInputComponent{

    @Input() input!: InputElement<string>;
    @Input() userReg!: FormGroup;
    get isValid() { return this.userReg.controls[this.input.name].valid; }
    get isTouched() { return this.userReg.controls[this.input.name].touched;}
    get isDirty() { return this.userReg.controls[this.input.name].dirty;}
}
