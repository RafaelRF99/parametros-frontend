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
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      })
    );
  }
}
