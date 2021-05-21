import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
import { LinkedinLoginResponse } from "./linkedinLoginResponse/linkedinLoginResponse.component";
import { HomeComponent } from './home/home.component';

=======
import { FooterComponent } from './components/footer/footer.component';
import { LinkedinLoginResponse } from "./components/linkedinLoginResponse/linkedinLoginResponse.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './components/wizard/wizard.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
>>>>>>> eb160ee82b5ae59a4812aa217ec2dbadbfc6bf60

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    LinkedinLoginResponse,
<<<<<<< HEAD
      HomeComponent
=======
    WizardComponent,
    FormPageComponent,
    StepsComponent,
    StepTemplateComponent,
    CompletePageComponent
>>>>>>> eb160ee82b5ae59a4812aa217ec2dbadbfc6bf60
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
