
//All response elements are assumed to be input
export class InputElement<T> {
    type: T;
    name: string;
    label: string;
    required: boolean;
    //validations: { name:string, message:string, value:string }[];
    
    constructor(options: {
        type?: T;
        name?: string;
        label?: string;
        required?: boolean;
        //validations?: { name:string, message:string, value:string }[];
      } = {}) {
      this.type = options.type!;
      this.name = options.name || '';
      this.label = options.label || '';
      this.required = !!options.required;
      //this.validations = options.validations || [];
    }
}