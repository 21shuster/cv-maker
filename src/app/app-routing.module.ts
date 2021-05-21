import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LinkedinLoginResponse } from "./components/linkedinLoginResponse/linkedinLoginResponse.component";
import { CompletePageComponent } from "./pages/complete-page/complete-page.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "linkedInLogin", component: LinkedinLoginResponse },
  { path: 'form', component: FormPageComponent },
  { path: 'complete', component: CompletePageComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
