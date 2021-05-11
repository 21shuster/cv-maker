import { Login } from './../models/login.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  mForm: FormGroup
  isSent = false

  linkedInCredentials = {
    clientId: "86prfmpxf96jef",
    redirectUrl: "http://localhost:4200/linkedInLogin",
    scope: "r_liteprofile%20r_emailaddress%20w_member_social" // To read basic user profile data and email
  };

  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope={this.linkedInCredentials.scope}`;
  }

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private http: HttpClient) {

    this.mForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })

  }

  ngOnInit() {
    //Comprobar si estoy logueado, si estoy logueado que vaya al dasbboard
  }

  signup() {
    this.router.navigate(["/register"])
  }

  get f() {
    return this.mForm.controls
  }

  onSubmit() {

    this.isSent = true

    console.log("Enviar form");

    if (this.mForm.invalid) {
      return
    }
    /*Hacer llamada al service
    Hacer dos servicios: user, people
    llamar al servicio de login y en la respuesta guardar en el localStorage el token y redirigir al DASHBOARD
    */

    const login: Login = new Login()
    login.email = this.f.email.value
    login.password = this.f.password.value
    this.userService.login(login).subscribe((data: any) => {
      localStorage.setItem("token",data.access_token)
      this.router.navigate(["/dashboard"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );

  }
}
