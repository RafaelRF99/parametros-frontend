import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('token') || ''
  );

  constructor() {}

  getToken() {
    localStorage.getItem('token');
  }

  change(value: string) {
    localStorage.setItem('token', value);
  }

  delete() {
    localStorage.clear();
  }
}
