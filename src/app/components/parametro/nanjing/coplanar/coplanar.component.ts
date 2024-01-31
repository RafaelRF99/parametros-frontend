import { Component, Input, SimpleChanges } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';

export interface IParametroProps {
  position?: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
}

@Component({
  selector: 'app-coplanar',
  templateUrl: './coplanar.component.html',
  styleUrls: ['./coplanar.component.scss'],
})
export class CoplanarComponent {
  @Input() parametro!: IParametro;
  ELEMENT_DATA: IParametroProps[] = [];
  ELEMENT_DATA2: IParametroProps[] = [];

  positionFrase: string[] = [
    'A1 Platen Motor Angle(*)',
    'A1 Platen MotorSpeed (º/s)',
    'A2 Platen Motor Angle(*)',
    'A2 Platen MotorSpeed (º/s)',
    'A3 Platen Motor Angle(*)',
    'A3 Platen MotorSpeed (º/s)',
    'A4 Platen Motor Angle(*)',
    'A4 Platen MotorSpeed (º/s)',
    'A1 Sub Number',
    'A2 Sub Number',
    'A3 Sub Number',
    'A4 Sub Number',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parametro'] && this.parametro) {
      this.ELEMENT_DATA = this.parametro.p2.map((item, i) => ({
        position: this.positionFrase[i],
        s1: item.s1 || '',
        s2: item.s2 || '',
        s3: item.s3 || '',
        s4: item.s4 || '',
        s5: item.s5 || '',
      }));
    }
    if (changes['parametro'] && this.parametro) {
      this.ELEMENT_DATA2 = this.parametro.p3.map((item, i) => ({
        position: this.positionFrase[i],
        s1: item.s1 || '',
        s2: item.s2 || '',
        s3: item.s3 || '',
        s4: item.s4 || '',
        s5: item.s5 || '',
      }));
    }
  }

  displayedColumns: string[] = ['position', 's1', 's2', 's3', 's4', 's5'];
  get dataSource(): IParametroProps[] {
    return this.ELEMENT_DATA;
  }

  displayedColumns2: string[] = ['position', 's1', 's2', 's3', 's4', 's5'];
  get dataSource2(): IParametroProps[] {
    return this.ELEMENT_DATA2;
  }
}
