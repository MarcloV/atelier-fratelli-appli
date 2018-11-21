
import { Injectable } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { FormGeneratorProvider } from '../form-generator/form-generator';
import { Legumes } from '../../models/legumes';

@Injectable()
export class LegumesFormGeneratorProvider extends FormGeneratorProvider<Legumes> {

  constructor(formBuilder: FormBuilder) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
      
    
      }),
    });
  }

}