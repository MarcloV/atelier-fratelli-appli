import { Injectable } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { FormGeneratorProvider } from '../form-generator/form-generator';
import { Tiramisu } from '../../models/tiramisu';

/*
  Generated class for the TiramisuFormGeneratorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TiramisuFormGeneratorProvider extends FormGeneratorProvider<Tiramisu> {
  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({

      }),
    });
  }

}
