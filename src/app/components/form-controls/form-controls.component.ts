import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'app-form-controls',
  standalone: true,
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
