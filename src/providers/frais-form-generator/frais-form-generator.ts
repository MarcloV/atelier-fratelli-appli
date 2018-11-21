
import { Injectable } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { FormGeneratorProvider } from '../form-generator/form-generator';
import { Frais } from '../../models/frais';

@Injectable()
export class FraisFormGeneratorProvider extends FormGeneratorProvider<Frais> {

  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
        
      }),
    });
  }

}