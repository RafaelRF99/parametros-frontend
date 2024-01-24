import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-btn-options',
  templateUrl: './btn-options.component.html',
  styleUrls: ['./btn-options.component.scss'],
})
export class BtnOptionsComponent {
  isBtn: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  handleBtn() {
    this.isBtn = !this.isBtn;
  }

  handleDeleta() {
    this.tokenService.delete();
    this.router.navigate(['/auth']);
  }
}
