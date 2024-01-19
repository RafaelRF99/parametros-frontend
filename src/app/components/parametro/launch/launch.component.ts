import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchComponent {
  maquinaSelected = new FormControl('');
  maquinaOptions: string[] = ['YG', 'NJ'];

  formPartnumber!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formPartnumber = this.formBuilder.group({
      partNumber: [null, Validators.required],
      linha: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(2)]),
      ],
      programaCorte: [null, Validators.required],
      anguloVidea: [null, Validators.required],
    });
  }
}
