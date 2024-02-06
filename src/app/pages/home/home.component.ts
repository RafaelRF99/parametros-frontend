import { Component, OnInit } from '@angular/core';
import { IParametro } from 'src/app/interfaces/IParametro';
import { AuthService } from 'src/app/services/auth.service';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  parametro!: IParametro;

  constructor(
    private parametroService: ParametrosService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.parametroService.filterByPartNumber('6003770', '4').subscribe(
      (parametro) => {},
      (error) => {
        this.auth.handleAuthenticationError(error.error);
      }
    );
  }

  handleTypeSelected(event: any) {
    this.parametro = event;
  }

  clear() {
    location.reload();
  }
}
