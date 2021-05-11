import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LinkedinLoginResponse } from "./linkedinLoginResponse/linkedinLoginResponse.component";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    LinkedinLoginResponse,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
