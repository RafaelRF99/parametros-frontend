import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      partNumber: [null, Validators.required],
      line: [null, Validators.required],
    });
  }

  onSubmit() {
    const { partNumber, line } = this.form.value;
    if (this.form.valid) {
      console.log('Feito', partNumber, line);
    }
  }
}
