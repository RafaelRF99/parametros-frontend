import { Component, Input, SimpleChanges } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';

// export interface PeriodicElement {
//   position: string;
//   a1: string;
//   a2: string;
//   a3: string;
//   a4: string;
//   b1: string;
//   b2: string;
//   b3: string;
//   b4: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 'ATRASAR FECHAMENTO 1500 (±1000)',
//     a1: '500',
//     a2: '500',
//     a3: '500',
//     a4: '500',
//     b1: '500',
//     b2: '500',
//     b3: '500',
//     b4: '500',
//   },
//   {
//     position: 'ANTECIPAR SAÍDA 50(±20)',
//     a1: '50',
//     a2: '50',
//     a3: '50',
//     a4: '50',
//     b1: '50',
//     b2: '50',
//     b3: '50',
//     b4: '50',
//   },
//   {
//     position: 'ÂNGULO DE ROTAÇÃO',
//     a1: '450',
//     a2: '450',
//     a3: '450',
//     a4: '450',
//     b1: '450',
//     b2: '450',
//     b3: '450',
//     b4: '450',
//   },
//   {
//     position: 'VELOCIDADE DE GIRO (± 2)',
//     a1: '',
//     a2: '',
//     a3: '',
//     a4: '',
//     b1: '',
//     b2: '',
//     b3: '',
//     b4: '',
//   },
//   {
//     position: 'PRESSÃO DO REBOLO 7(±3) 0.5 á 2.0 (Kg)',
//     a1: '1.5',
//     a2: '1.5',
//     a3: '8',
//     a4: '8',
//     b1: '1.5',
//     b2: '1.5',
//     b3: '8',
//     b4: '8',
//   },
// ];

export interface IParametroProps {
  position: string;
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
  selector: 'app-nanjing',
  templateUrl: './nanjing.component.html',
  styleUrls: ['./nanjing.component.scss'],
})
export class NanjingComponent {
  @Input() parametro!: IParametro;
  ELEMENT_DATA: IParametroProps[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parametro'] && this.parametro) {
      this.ELEMENT_DATA = this.parametro.p1.map((item) => ({
        position: item.position || '',
        a1: item.a1 || '',
        a2: item.a2 || '',
        a3: item.a3 || '',
        a4: item.a4 || '',
        b1: item.b1 || '',
        b2: item.b2 || '',
        b3: item.b3 || '',
        b4: item.b4 || '',
      }));
    }
  }

  displayedColumns: string[] = [
    'position',
    'a1',
    'a2',
    'a3',
    'a4',
    'b1',
    'b2',
    'b3',
    'b4',
  ];

  get dataSource(): IParametroProps[] {
    return this.ELEMENT_DATA;
  }
}
