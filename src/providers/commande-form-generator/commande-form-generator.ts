
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGeneratorProvider } from "../form-generator/form-generator";
import {Commande } from '../../models/commande' ;
import { FraisFormGeneratorProvider } from '../frais-form-generator/frais-form-generator';
import { LegumesFormGeneratorProvider } from '../legumes-form-generator/legumes-form-generator';
import { PizzaFormGeneratorProvider } from '../pizza-form-generator/pizza-form-generator';

@Injectable()
export class CommandeFormGeneratorProvider extends FormGeneratorProvider<Commande> {

  constructor(formBuilder: FormBuilder, ffg: FraisFormGeneratorProvider, lfg: LegumesFormGeneratorProvider, pfg: PizzaFormGeneratorProvider) {
    super({
      formBuilder: formBuilder,
      schema: () => ({
date: ['', Validators.required],
      }),
      complexMapper: {
        pizza: pfg,
        frais: ffg,
        legumes: lfg,
      
      }
    });
  }

}

