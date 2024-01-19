import { Component } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  parametro!: IParametro;

  handleTypeSelected(event: any) {
    this.parametro = event;
  }

  clear() {
    location.reload();
  }
}
