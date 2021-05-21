import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LinkedinLoginResponse } from "./linkedinLoginResponse/linkedinLoginResponse.component";
import { HomeComponent } from './home/home.component';
import { TemplateAngularComponent } from './templates/templateAngular/templateAngular.component';
import { TemplateAndroidComponent } from './templates/templateAndroid/templateAndroid.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "linkedInLogin", component: LinkedinLoginResponse },
  { path: "templateAngular", component: TemplateAngularComponent },
  { path: "templateAndroid", component: TemplateAndroidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
