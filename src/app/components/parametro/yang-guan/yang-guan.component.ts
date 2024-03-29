import { Component, Input } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';

@Component({
  selector: 'app-yang-guan',
  templateUrl: './yang-guan.component.html',
  styleUrls: ['./yang-guan.component.scss'],
})
export class YangGuanComponent {
  @Input() parametro!: IParametro;
}
