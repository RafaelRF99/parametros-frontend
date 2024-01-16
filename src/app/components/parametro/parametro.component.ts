import { Component, Input, SimpleChanges } from '@angular/core';
import { ILaser } from 'src/app/interfaces/ILaser';
import { IParametro } from 'src/app/interfaces/IParametro';
import { IVision } from 'src/app/interfaces/IVision';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.scss'],
})
export class ParametroComponent {
  @Input() parametro!: IParametro;
  ELEMENT_DATA_VISION: IVision[] = [];
  ELEMENT_DATA_LASER: ILaser[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parametro'] && this.parametro) {
      this.ELEMENT_DATA_VISION = [
        {
          superficie: '1º',
          metal: this.parametro.metal || '',
          raio: this.parametro.raio || '',
          tipo: this.parametro.tipo || '',
          gravacao: this.parametro.gravacao || '',
        },
      ];
      this.ELEMENT_DATA_LASER = [
        {
          salto: this.parametro.velocidadeSalto,
          processamento: this.parametro.velocidadeProcessamento,
          intensidade: this.parametro.intensidade,
          frequencia: this.parametro.frequencia,
        },
      ];
    }
  }

  // LASER
  displayedColumnsLaser: string[] = [
    'salto',
    'processamento',
    'intensidade',
    'frequencia',
  ];
  get dataSourceLaser(): ILaser[] {
    return this.ELEMENT_DATA_LASER;
  }

  // VISION SYSTEM
  displayedColumnsVision: string[] = [
    'superficie',
    'metal',
    'raio',
    'tipo',
    'gravacao',
  ];

  get dataSourceVision(): IVision[] {
    return this.ELEMENT_DATA_VISION;
  }
}
