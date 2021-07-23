import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/authentication/auth.service';

import { Notas } from '../shared/models/notas.model';


@Injectable({
  providedIn: 'root'
})
export class NotasService {

  myAppUrl: string;
  myApiUrl: string;
  notas: Notas[] = [];
  

  constructor(private http: HttpClient,
              private auth: AuthService) { 
    this.myAppUrl = environment.enpoint;
    this.myApiUrl = '/api/Notas/';
  }

  listarNotas(): Observable<any>{ 
    let token: string;
    token = this.auth.leerStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };
    return this.http.get(this.myAppUrl + this.myApiUrl + "getNotas",httpOptions);
  }

  crearNota( notas:Notas):Observable<any>{
    let token: string;
    token = this.auth.leerStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    return this.http.post(this.myAppUrl + this.myApiUrl + "addNotas", notas,httpOptions);
  }

  deleteNota(notas: Notas): Observable<any>{
    let token: string;
    token = this.auth.leerStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    //return this.http.post(this.myAppUrl + this.myApiUrl + "deleteNotas/" + id, Notas);
    return this.http.post(this.myAppUrl + this.myApiUrl + "deleteNotas", notas,httpOptions);
  }
  
  updateNota(notas:Notas):Observable<any>{
    let token: string;
    token = this.auth.leerStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    return this.http.post(this.myAppUrl + this.myApiUrl + "updateNotas",notas,httpOptions)
  }
  
  consultarPorFecha(notas: Notas): Observable<any>{
    let token: string;
    token = this.auth.leerStorage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    return this.http.post(this.myAppUrl + this.myApiUrl + "searchNotas", notas,httpOptions)
  }
  
  
  // obtenerNota( id:string | number ){
    
  //   id = Number(id);

  //   return this.Notas.find( NotasData =>  NotasData.id === id);
     
  // }

  // guardarStorage(){
    
  //   localStorage.setItem('data',JSON.stringify( this.Notas) );
  // }

  // cargarStorage(){

  //   if(localStorage.getItem('data')){

  //     this.Notas = JSON.parse( localStorage.getItem('data') );

  //   }else{
  //     this.Notas = [];
  //   }
  // }
}
