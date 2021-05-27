import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LinkedinLoginResponse } from "./components/linkedinLoginResponse/linkedinLoginResponse.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WizardComponent } from './components/wizard/wizard.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepTemplateComponent } from './components/step-template/step-template.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    LinkedinLoginResponse,
    WizardComponent,
    FormPageComponent,
    StepsComponent,
    StepTemplateComponent,
    CompletePageComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
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
