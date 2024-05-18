import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput} from "@angular/material/datepicker";
import {MatHint} from "@angular/material/form-field";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-date-selector-popup',
  standalone: true,
  imports: [
    MatFormField,
    MatDatepicker,
    MatDatepickerInput,
    MatHint,
    MatLabel
  ],
  templateUrl: './date-selector-popup.component.html',
  styleUrl: './date-selector-popup.component.css'
})
export class DateSelectorPopupComponent {

}
