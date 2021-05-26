import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-templateAngular',
  templateUrl: './templateAngular.component.html',
  styleUrls: ['./templateAngular.component.css']
})
export class TemplateAngularComponent implements OnInit {
  person: Person = new Person()
  user: Login = new Login()
  constructor() { }

  ngOnInit() {
  }

}
