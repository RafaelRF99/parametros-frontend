import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NjLaunchService {
  formNJ!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formNJ = this.formBuilder.group({
      atrasarA1: [null],
      atrasarA2: [null],
      atrasarA3: [null],
      atrasarA4: [null],
      atrasarB1: [null],
      atrasarB2: [null],
      atrasarB3: [null],
      atrasarB4: [null],

      anteciparA1: [null],
      anteciparA2: [null],
      anteciparA3: [null],
      anteciparA4: [null],
      anteciparB1: [null],
      anteciparB2: [null],
      anteciparB3: [null],
      anteciparB4: [null],

      anguloA1: [null],
      anguloA2: [null],
      anguloA3: [null],
      anguloA4: [null],
      anguloB1: [null],
      anguloB2: [null],
      anguloB3: [null],
      anguloB4: [null],

      velGiroA1: [null],
      velGiroA2: [null],
      velGiroA3: [null],
      velGiroA4: [null],
      velGiroB1: [null],
      velGiroB2: [null],
      velGiroB3: [null],
      velGiroB4: [null],

      pressaoA1: [null],
      pressaoA2: [null],
      pressaoA3: [null],
      pressaoA4: [null],
      pressaoB1: [null],
      pressaoB2: [null],
      pressaoB3: [null],
      pressaoB4: [null],

      atrasarAvanco: [null],
      atrasarLeituraEspelho: [null],
    });
  }
}
