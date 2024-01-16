import { Component } from '@angular/core';
import { ILaser } from 'src/app/interfaces/ILaser';
import { IVision } from 'src/app/interfaces/IVision';

const ELEMENT_DATA_VISION: IVision[] = [
  {
    superficie: '1º',
    metal: 'Chromium',
    raio: '1000/1400',
    tipo: 'N/A',
    gravacao: 'N/A',
  },
];

const ELEMENT_DATA_LASER: ILaser[] = [
  {
    salto: '2300',
    processamento: '2300',
    intensidade: '100',
    frequencia: '19500',
  },
];

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.scss'],
})
export class ParametroComponent {
  // LASER
  dataSourceLaser = ELEMENT_DATA_LASER;
  displayedColumnsLaser: string[] = [
    'salto',
    'processamento',
    'intensidade',
    'frequencia',
  ];

  // VISION SYSTEM
  displayedColumnsVision: string[] = [
    'superficie',
    'metal',
    'raio',
    'tipo',
    'gravacao',
  ];
  dataSourceVision = ELEMENT_DATA_VISION;
}
