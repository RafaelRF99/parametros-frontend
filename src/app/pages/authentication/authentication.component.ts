import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  form!: FormGroup;

  constructor(private formbuilder: FormBuilder, private auth: AuthService) {
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

      this.auth.validation(email, password).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
