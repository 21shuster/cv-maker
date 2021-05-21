import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { LinkedinLoginResponse } from "./linkedinLoginResponse/linkedinLoginResponse.component";
import { HomeComponent } from './home/home.component';
import { TemplateAngularComponent } from './templates/templateAngular/templateAngular.component';
import { TemplateAndroidComponent } from './templates/templateAndroid/templateAndroid.component';
=======
import { LoginComponent } from './components/login/login.component';
import { LinkedinLoginResponse } from "./components/linkedinLoginResponse/linkedinLoginResponse.component";
import { CompletePageComponent } from "./pages/complete-page/complete-page.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";
>>>>>>> eb160ee82b5ae59a4812aa217ec2dbadbfc6bf60

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "linkedInLogin", component: LinkedinLoginResponse },
<<<<<<< HEAD
  { path: "templateAngular", component: TemplateAngularComponent },
  { path: "templateAndroid", component: TemplateAndroidComponent }
=======
  { path: 'form', component: FormPageComponent },
  { path: 'complete', component: CompletePageComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
>>>>>>> eb160ee82b5ae59a4812aa217ec2dbadbfc6bf60
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
