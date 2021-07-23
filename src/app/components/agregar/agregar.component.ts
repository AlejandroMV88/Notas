import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

//import { Agregar } from 'src/app/models/agregar.model';

import { Notas } from 'src/app/shared/models/notas.model';
import { DatosService } from 'src/app/services/datos.service';
import { NotasService } from 'src/app/services/notas.service';


 
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {

  notas: Notas;
  registrar: FormGroup;
  // nombreDesc = '';   
  datos: Notas;
  
  id: number;
  titulo: string;
  content: string;

  constructor( private notasService: NotasService ,
                private datosService: DatosService,
                private router : Router,
                private fb: FormBuilder) { 
      
        // const NotasId = this.route.snapshot.paramMap.get('NotasId');

        // this.Notas = this.Notaservice.obtenerNota( NotasId );
        this.registrar = this.fb.group({
          
          titulo: '',
          content:''
        });
        
    }

    ngOnInit(): void {
      this.editarDatos();
      this.Datos();
    }


    CrearNota(): void {
      console.log(this.registrar);
      const notas: Notas = {
        titulo: this.registrar.value.titulo,
        content: this.registrar.value.content,
      };
        this.notasService.crearNota(notas).subscribe(data => {
        console.log(data);
        
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      });
    }

    editarDatos(){
      this.datos = this.datosService.notas;
      this.id = this.datosService.notas.id;
      this.titulo = this.datosService.notas.titulo;
      this.content = this.datosService.notas.content;
    }

    Datos(){
    this.registrar.setValue({ titulo: this.titulo , content: this.content })
    }
    
    actualizarNota(): void{
      
      const nota: Notas = {
        id: this.id,
        titulo: this.registrar.value.titulo,
        content: this.registrar.value.content
      };
      
      this.notasService.updateNota(nota).subscribe(data => {
        console.log(data.nota);
        this.router.navigate(['/home']);
        
      }, error => {
        console.log(error);
      });
    }
  
}
