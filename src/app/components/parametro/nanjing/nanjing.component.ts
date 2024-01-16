import { Component } from '@angular/core';

export interface PeriodicElement {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
  b1: number;
  b2: number;
  b3: number;
  b4: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { a1: 500, a2: 500, a3: 500, a4: 500, b1: 500, b2: 500, b3: 500, b4: 500 }, // 1 linha
  { a1: 50, a2: 50, a3: 50, a4: 50, b1: 50, b2: 50, b3: 50, b4: 50 }, // 2 linha
  { a1: 450, a2: 450, a3: 450, a4: 450, b1: 450, b2: 450, b3: 450, b4: 450 }, // 3 linha
  { a1: 0, a2: 0, a3: 0, a4: 0, b1: 0, b2: 0, b3: 0, b4: 0 }, // 4 linha
  { a1: 1.5, a2: 1.5, a3: 8, a4: 8, b1: 1.5, b2: 1.5, b3: 8, b4: 8 }, // 5 linha
];

@Component({
  selector: 'app-nanjing',
  templateUrl: './nanjing.component.html',
  styleUrls: ['./nanjing.component.scss'],
})
export class NanjingComponent {
  displayedColumns: string[] = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4'];
  dataSource = ELEMENT_DATA;
}
