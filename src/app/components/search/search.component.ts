import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IParametro } from 'src/app/interfaces/IParametro';
import { AuthService } from 'src/app/services/auth.service';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form!: FormGroup;
  @Output() parametroSelected: EventEmitter<IParametro> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private parametroService: ParametrosService,
    private auth: AuthService
  ) {
    this.form = this.formBuilder.group({
      partNumber: [null, Validators.required],
      line: [null, Validators.required],
    });
  }

  onSubmit() {
    const { partNumber, line } = this.form.value;
    if (this.form.valid) {
      let partNumberFilter = partNumber;
      let lineFilter = line;

      if (partNumber.endsWith(' ')) {
        partNumberFilter = partNumber.slice(0, -1);
      }
      if (line.endsWith(' ')) {
        lineFilter = line.slice(0, -1);
      }

      if (line.endsWith(' ')) {
        lineFilter = line.slice(0, -1);
      }

      this.parametroService
        .filterByPartNumber(partNumberFilter, lineFilter)
        .subscribe(
          (parametro) => {
            this.parametroSelected.emit(parametro);
            console.log(new Date());
          },
          (error) => {
            this.auth.handleAuthenticationError(error.error);
          }
        );
    }
  }
}
