import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Custom array for component routing
export const RoutingComponents = [
  RegistrationComponent,
  WelcomeComponent
]
