import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class YgLaunchService {
  formNJ!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formNJ = this.formBuilder.group({
      tempoEnvio1: [null],
      tempoEnvio2: [null],
      atrasoEntradaBraco: [null],
      retardoVentosa: [null],
      atrasoSaidaBracoDianteira: [null],
      atrasoSaidaBracoTraseira: [null],
      tempoGiroDianteira: [null],
      tempoGiroTraseira: [null],
      velocidadeLixEsq: [null],
      velocidadeLapDireita: [null],
      qtdVoltasFrontal: [null],
      qtdVoltasTraseira: [null],
      pressaoLixado: [null],
      pressaoLapidado: [null],
      rvm: [null],
      rvmRaio: [null],
      rvmMin: [null],
      rvmMax: [null],
    });
  }
}
