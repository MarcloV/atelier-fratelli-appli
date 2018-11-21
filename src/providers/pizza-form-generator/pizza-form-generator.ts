import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { FormGeneratorProvider } from '../form-generator/form-generator';
import { Pizza } from '../../models/pizza';

@Injectable()
export class PizzaFormGeneratorProvider extends FormGeneratorProvider<Pizza> {

  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        tartufo: ['', Validators.maxLength(2)],
        bufala: ['', Validators.maxLength(2)],
        capra: ['', Validators.maxLength(2)],
        tonno: ['', Validators.maxLength(2)],
        parma: ['', Validators.maxLength(2)],
        formaggi: ['', Validators.maxLength(2)]
      }),
    });
  }

}
