import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { IParametro } from 'src/app/interfaces/IParametro';
import { AuthService } from 'src/app/services/auth.service';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;
  @Output() parametroSelected: EventEmitter<IParametro> = new EventEmitter();

  options: string[] = [];
  filteredOptions!: Observable<string[]> | undefined;

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

  ngOnInit() {
    this.filteredOptions = this.form.get('partNumber')?.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.parametroService.getAll().subscribe((parametro) => {
      this.options = parametro.map((parametro) => parametro.partNumber);
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.form.get('partNumber')?.setValue(event.option.value);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
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
