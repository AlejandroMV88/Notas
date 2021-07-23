import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [

  {path: 'home' , component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'agregar' , component: AgregarComponent,canActivate: [AuthGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'registrar' , component: RegistrarComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






