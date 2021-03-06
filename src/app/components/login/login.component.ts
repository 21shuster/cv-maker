import { Login } from '../../models/login.model';
import { UserService } from '../../services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('blackState', [
      state('true', style({opacity: '1', background: 'linear-gradient(to right, #2c2d34, #242424)'})),
      state('false', style({ opacity: '0', background: 'linear-gradient(to right, #2c2d34, #242424)'})),
      transition('0 <=> 1', animate('1000ms ease'))
    ]),
    trigger('greenState', [
      state('true', style({opacity: '1', background: 'linear-gradient(to right, #2c2d34, #467a5e)'})),
      state('false', style({ opacity: '0', background: 'linear-gradient(to right, #2c2d34, #467a5e)'})),
      transition('0 <=> 1', animate('1000ms ease'))
    ])
  ]
})

export class LoginComponent implements OnInit {

  name = 'Angular 6';
  container!: HTMLElement;
  blackState:boolean = true;
  greenState: boolean = false;

  toggle() {
    this.blackState = !this.blackState;
    this.greenState = !this.greenState;
  }

  mForm: FormGroup = new FormGroup({})
  isSent = false

  linkedInCredentials = {
    clientId: "86prfmpxf96jef",
    redirectUrl: "http://localhost:4200/linkedInLogin",
    scope: "r_liteprofile%20r_emailaddress%20w_member_social" // To read basic user profile data and email
  };

  imageToShow: any;

  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=${this.linkedInCredentials.scope}`;
  }

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private http: HttpClient) {

    this.mForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{4,30}$/)]]
    })

  }

  loadScript() {
    let node = document.createElement('script'); // creates the script tag
    node.src = 'https://kit.fontawesome.com/f6d06810b1.js'; // sets the source (insert url in between quotes)
    node.type = 'text/javascript'; // set the script type
    node.async = true; // makes script run asynchronously
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  loadImage(){
    var random = Math.floor(Math.random() * 10000);
    fetch(`https://api.artic.edu/api/v1/artworks/${random}`)
      .then(resp => {
        return resp.json()
      })
      .then(image => {
        console.log(image);
        if(image.status == 404){
          this.loadImage();
        }
        this.imageToShow = `https://www.artic.edu/iiif/2/${image.data.image_id}/full/1500,1000/0/default.jpg`;
        this.container = document.getElementById('container') as HTMLElement;
        this.container.style.background = "url(" + this.imageToShow + ") no-repeat 80%";
        this.container.style.cursor = "url('assets/images/droplet.svg'), auto";
        var title = document.getElementById('title') as HTMLElement;
        title.style.color =  "#ffffff";
      })
  }

  ngOnInit() {
    this.loadScript();
    this.loadImage();
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
      this.router.navigate(["/form"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );

  }
}
