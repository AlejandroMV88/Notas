import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BaseControlComponent } from './core/bases/base-control/base-control.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { LoadingComponent } from './shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarComponent,
    LoginComponent,
    BaseControlComponent,
    RegistrarComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
