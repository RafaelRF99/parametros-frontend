import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiAdmin;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  validation(email: string, password: string): Observable<any> {
    const apiAdmin = `${this.apiUrl}`;
    return this.http.post<any>(apiAdmin, { email, password }).pipe(
      tap((res) => {
        this.saveToken(res.token);
      })
    );
  }

  saveToken(token: string): void {
    this.tokenService.change(token);
    this.router.navigate(['/']);

    setTimeout(() => {
      this.tokenService.delete();
    }, 24 * 60 * 60 * 1000);
  }

  handleAuthenticationError(error: any): void {
    if (
      error &&
      error.auth === false &&
      error.message === 'Falha ao autenticar o token.'
    ) {
      this.tokenService.delete();
      this.router.navigate(['/auth']);
    }
  }
}
