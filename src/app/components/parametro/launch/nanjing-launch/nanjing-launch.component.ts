import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nanjing-launch',
  templateUrl: './nanjing-launch.component.html',
  styleUrls: ['./nanjing-launch.component.scss'],
})
export class NanjingLaunchComponent {
  @Output() parametrosChanged = new EventEmitter<any>();
  parametrosForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.parametrosForm = this.formBuilder.group({
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
    this.parametrosForm.valueChanges.subscribe(() => {
      const form = {
        atrasarAvanco: this.parametrosForm.get('atrasarAvanco')?.value,
        atrasarLeituraEspelho: this.parametrosForm.get('atrasarLeituraEspelho')
          ?.value,
        p1: [
          {
            atrasarA1: this.parametrosForm.get('atrasarA1')?.value,
            atrasarA2: this.parametrosForm.get('atrasarA2')?.value,
            atrasarA3: this.parametrosForm.get('atrasarA3')?.value,
            atrasarA4: this.parametrosForm.get('atrasarA4')?.value,
            atrasarB1: this.parametrosForm.get('atrasarB1')?.value,
            atrasarB2: this.parametrosForm.get('atrasarB2')?.value,
            atrasarB3: this.parametrosForm.get('atrasarB3')?.value,
            atrasarB4: this.parametrosForm.get('atrasarB4')?.value,
          },
          {
            anteciparA1: this.parametrosForm.get('anteciparA1')?.value,
            anteciparA2: this.parametrosForm.get('anteciparA2')?.value,
            anteciparA3: this.parametrosForm.get('anteciparA3')?.value,
            anteciparA4: this.parametrosForm.get('anteciparA4')?.value,
            anteciparB1: this.parametrosForm.get('anteciparB1')?.value,
            anteciparB2: this.parametrosForm.get('anteciparB2')?.value,
            anteciparB3: this.parametrosForm.get('anteciparB3')?.value,
            anteciparB4: this.parametrosForm.get('anteciparB4')?.value,
          },
          {
            anguloA1: this.parametrosForm.get('anguloA1')?.value,
            anguloA2: this.parametrosForm.get('anguloA2')?.value,
            anguloA3: this.parametrosForm.get('anguloA3')?.value,
            anguloA4: this.parametrosForm.get('anguloA4')?.value,
            anguloB1: this.parametrosForm.get('anguloB1')?.value,
            anguloB2: this.parametrosForm.get('anguloB2')?.value,
            anguloB3: this.parametrosForm.get('anguloB3')?.value,
            anguloB4: this.parametrosForm.get('anguloB4')?.value,
          },
          {
            velGiroA1: this.parametrosForm.get('velGiroA1')?.value,
            velGiroA2: this.parametrosForm.get('velGiroA2')?.value,
            velGiroA3: this.parametrosForm.get('velGiroA3')?.value,
            velGiroA4: this.parametrosForm.get('velGiroA4')?.value,
            velGiroB1: this.parametrosForm.get('velGiroB1')?.value,
            velGiroB2: this.parametrosForm.get('velGiroB2')?.value,
            velGiroB3: this.parametrosForm.get('velGiroB3')?.value,
            velGiroB4: this.parametrosForm.get('velGiroB4')?.value,
          },
          {
            pressaoA1: this.parametrosForm.get('pressaoA1')?.value,
            pressaoA2: this.parametrosForm.get('pressaoA2')?.value,
            pressaoA3: this.parametrosForm.get('pressaoA3')?.value,
            pressaoA4: this.parametrosForm.get('pressaoA4')?.value,
            pressaoB1: this.parametrosForm.get('pressaoB1')?.value,
            pressaoB2: this.parametrosForm.get('pressaoB2')?.value,
            pressaoB3: this.parametrosForm.get('pressaoB3')?.value,
            pressaoB4: this.parametrosForm.get('pressaoB4')?.value,
          },
        ],
      };

      this.parametrosChanged.emit(form);
    });
  }
}
