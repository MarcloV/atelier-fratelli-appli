
import { Injectable } from '@angular/core';
import { FormGeneratorProvider } from '../form-generator/form-generator';
import { FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { TiramisuFormGeneratorProvider } from '../tiramisu-form-generator/tiramisu-form-generator';
import { Dessert } from '../../models/dessert';

/*
  Generated class for the DessertFormGeneratorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DessertFormGeneratorProvider extends FormGeneratorProvider<Dessert> {

  constructor(formBuilder: FormBuilder,tfg:TiramisuFormGeneratorProvider) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
date: ['', Validators.required],
      }),
      complexMapper: {
      tiramisu: tfg,
      
      }
    });
  }

}
