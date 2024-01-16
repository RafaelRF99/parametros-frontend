import { Component, Input } from '@angular/core';
import { IParametro } from './interfaces/IParametro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parametro!: IParametro;

  handleTypeSelected(event: any) {
    this.parametro = event;
  }

  clear() {
    location.reload();
  }
}
