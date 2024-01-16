import { Component, Input, SimpleChanges } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';

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
