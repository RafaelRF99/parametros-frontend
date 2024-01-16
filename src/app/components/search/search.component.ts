import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IParametro } from 'src/app/interfaces/IParametro';
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
    private parametroService: ParametrosService
  ) {
    this.form = this.formBuilder.group({
      partNumber: [null, Validators.required],
      line: [null, Validators.required],
    });
  }

  onSubmit() {
    const { partNumber, line } = this.form.value;
    if (this.form.valid) {
      this.parametroService
        .filterByPartNumber(partNumber, line)
        .subscribe((parametro) => {
          this.parametroSelected.emit(parametro);
          console.log(parametro);
        });
    }
  }
}
