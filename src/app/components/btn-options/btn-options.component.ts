import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-btn-options',
  templateUrl: './btn-options.component.html',
  styleUrls: ['./btn-options.component.scss'],
})
export class BtnOptionsComponent {
  isBtn: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  handleBtn() {
    this.isBtn = !this.isBtn;
  }

  handleDeleta() {
    this.auth.deleteToken();
    this.router.navigate(['/auth']);
  }
}
