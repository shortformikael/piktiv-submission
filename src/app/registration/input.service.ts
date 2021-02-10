
import RESPONSE from './example-response.json';
import { Injectable } from '@angular/core';

import { InputElement } from './input-element';

@Injectable()
export class InputService {

    responseData: any[] = RESPONSE;

    getInputs() {
        const Inputs: InputElement<string>[] = [];

        for(let i = 0; i < this.responseData.length; i++){

            Inputs[i] = new InputElement<string>({
                type: this.responseData[i].type,
                name: this.responseData[i].name,
                label: this.responseData[i].label,
                required: this.responseData[i].required,
                validations: this.responseData[i].validations
            });
        }

        return Inputs;
    }
}