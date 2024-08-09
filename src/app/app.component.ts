import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CalculateMPG';
  mpg: string | null = null;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gallons: ['', Validators.required],
      miles: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      const gallons = parseFloat(values.gallons);
      const miles = parseFloat(values.miles);
      if (!isNaN(gallons) && !isNaN(miles)) {
        this.mpg = (miles / gallons).toFixed(2);
      } else {
        this.mpg = null;
      }
    });
  }
}
