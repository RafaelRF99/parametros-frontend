import { environment } from './../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { IParametro } from '../interfaces/IParametro';
import { INJ } from '../interfaces/INJ';
import { TokenService } from './token.service';
import { IYG } from '../interfaces/IYG';

@Injectable({
  providedIn: 'root',
})
export class ParametrosService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private tokenService: TokenService
  ) {}

  headers = this.tokenService.headers;

  getAll(): Observable<IParametro[]> {
    const headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<IParametro[]>(this.apiUrl, { headers });
  }

  filterByPartNumber(
    partNumber: string,
    linha: string
  ): Observable<IParametro> {
    const headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<IParametro[]>(this.apiUrl, { headers }).pipe(
      map((parametros) => {
        const parametro = parametros.find(
          (parametro) =>
            parametro.partNumber === partNumber.toLocaleLowerCase() &&
            parametro.linha === linha
        );
        if (!parametro) {
          this._snackBar.open('Parâmetro não existe', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
          throw new Error('Parâmetro não existe!');
        }
        return parametro;
      })
    );
  }

  create(parametro: INJ): Observable<INJ> {
    const headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<INJ>(this.apiUrl, parametro, { headers });
  }

  createYG(parametro: IYG): Observable<IYG> {
    const headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<IYG>(this.apiUrl, parametro, { headers });
  }
}
