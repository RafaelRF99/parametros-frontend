import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  form!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formbuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  inLogin() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      const lowercaseEmail = email.toLowerCase();

      this.auth.validation(lowercaseEmail, password).subscribe(
        (res) => {},
        (error) => {
          this._snackBar.open(error.error.message, 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
        }
      );
    }
  }
}
