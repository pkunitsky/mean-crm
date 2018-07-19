import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthComponent, AuthRoutes} from './auth.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: AuthRoutes.LOGIN},
      {path: AuthRoutes.LOGIN, component: LoginComponent},
      {path: AuthRoutes.REGISTER, component: RegisterComponent},
      {path: AuthRoutes.TEST, component: TestComponent}
    ]
  },
  {path: '**', redirectTo: AuthRoutes.LOGIN}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
