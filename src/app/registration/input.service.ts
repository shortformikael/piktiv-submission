
import RESPONSE from './example-response.json';
import { Injectable } from '@angular/core';

import { InputElement } from './input-element';

@Injectable()
export class InputService {

    responseData: any[] = RESPONSE;

    getInputs() {

    const Inputs: InputElement<string>[] = [

        new InputElement({
            type: 'text',
            name: 'testing',
            label: 'TestingInput',
            required: true
        })

    ];
    return Inputs;
  }
}