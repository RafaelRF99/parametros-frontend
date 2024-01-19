import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface partNumberProps {
  partNumber: string;
  linha: string;
  programaCorte: string;
  anguloVidea: string;
}

interface parametrosNJProps {
  position?: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  b1: string;
  b2: string;
  b3: string;
  b4: string;
}

@Component({
  selector: 'app-nanjing-launch',
  templateUrl: './nanjing-launch.component.html',
  styleUrls: ['./nanjing-launch.component.scss'],
})
export class NanjingLaunchComponent {
  @Input() information: partNumberProps;

  parametros!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.information = {
      partNumber: '',
      linha: '',
      programaCorte: '',
      anguloVidea: '',
    };
    this.parametros = this.formBuilder.group({
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

      videaA1: [null],
      videaA2: [null],
      videaA3: [null],
      videaA4: [null],
      videaB1: [null],
      videaB2: [null],
      videaB3: [null],
      videaB4: [null],

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
    });
  }
}
