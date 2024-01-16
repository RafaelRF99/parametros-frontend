import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IParametro } from '../interfaces/IParametro';

@Injectable({
  providedIn: 'root',
})
export class ParametrosService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IParametro[]> {
    return this.http.get<IParametro[]>(this.apiUrl);
  }

  filterByPartNumber(
    partNumber: string,
    linha: string
  ): Observable<IParametro> {
    return this.http.get<IParametro[]>(this.apiUrl).pipe(
      map((parametros) => {
        const parametro = parametros.find(
          (parametro) =>
            parametro.partNumber === partNumber && parametro.linha === linha
        );
        if (!parametro) {
          throw new Error('Parâmetro não existe!');
        }
        return parametro;
      })
    );
  }
}
