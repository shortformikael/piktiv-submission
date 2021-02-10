import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputElement } from './input-element';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputElement<string>[] ) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.name] = input.required ? new FormControl('', Validators.required):
                                         new FormControl();
    });
    return new FormGroup(group);
  }
}