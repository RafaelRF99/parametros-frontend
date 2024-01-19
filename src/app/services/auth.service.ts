import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiAdmin;

  constructor(private http: HttpClient, private router: Router) {}

  validation(email: string, password: string): Observable<any> {
    const apiAdmin = `${this.apiUrl}`;
    return this.http.post<any>(apiAdmin, { email, password }).pipe(
      tap((res) => {
        this.saveToken(res.token);
      })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['/']);

    const now = new Date();
    const resetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // Próximo dia
      3, // horas
      0, // minutos
      0 // segundos
    );
    const timeUntilReset = resetTime.getTime() - now.getTime();
    setTimeout(() => {
      this.deleteToken();
    }, timeUntilReset);
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }
}
