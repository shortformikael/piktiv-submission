import { Component, Input, OnInit } from '@angular/core';
//Form management from @angular
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

import { InputElement } from './input-element';


@Component({
  selector: 'app-input',
  templateUrl: './registration-input.component.html'
})
export class RegistrationInputComponent{

    @Input() input!: InputElement<string>;
    @Input() userReg!: FormGroup;

}
