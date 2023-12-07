import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userList: Array<{ name: string; cif: string; direccion: string;}> = [];
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  onSaveUser(user: { name: string; cif: string; direccion: string;}) {
      this.userList.push(user);
  }

  ngOnInit(): void {}
}
