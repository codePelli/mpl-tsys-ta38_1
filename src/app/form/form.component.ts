import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() saveUser = new EventEmitter();

  userFormGroup: FormGroup;
  group: number[] = [1, 2];
  selectedGroup: number | undefined;

  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      name: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    console.log(this.userFormGroup);
  }

  save(): void {
    if (this.userFormGroup.valid) {
      this.saveUser.emit(this.userFormGroup.value);
      this.userFormGroup.reset();
    }
  }
}