import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() user: { name: string; cif: string; direccion: string } = {
    name: 'd',
    cif: 'f',
    direccion: 'b'
  };
  @Output() saveUser = new EventEmitter();

  nameControl: any;
  cifControl: any;
  direccionControl: any;
  userFormGroup: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.nameControl = this.user.name;
    this.cifControl = this.user.cif;
    this.direccionControl = this.user.direccion;

    this.userFormGroup = this.fb.group({
      name: this.nameControl,
      cif: this.cifControl,
      direccion: this.direccionControl,
    });
  }

  save(): void {
    this.saveUser.emit(this.userFormGroup);
    console.log(this.userFormGroup);
  }
}
