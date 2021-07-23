import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Notas } from 'src/app/shared/models/notas.model';
import { NotasService } from 'src/app/services/notas.service';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { DatosService } from 'src/app/services/datos.service';
import { AuthService } from 'src/app/core/authentication/auth.service';


 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent  {

  notas: Notas[] = [];
  buscarFecha: FormGroup;
  fecha: Date;
  listarFechas: Notas[] = [];
  cont = 0;
  datos: Notas;

  constructor( private notasService: NotasService ,
                private datosService: DatosService,
                private router : Router,
                private fb: FormBuilder,
                private auth: AuthService)
  {   
      this.buscarFecha = this.fb.group({
          update_date: ''
        });
  }
  
  ngOnInit(): void {
    this.setNotesList();
  }

  private setNotesList() {

    this.notasService.listarNotas().subscribe(result => {

      // console.log(result.notas);
      this.notas = result.notas;
    })

  }

  obtenerDatos(not) {
    this.datosService.notas = not;
    this.router.navigate(['/agregar']);
  }
  
  borrarNota(notas:Notas){

    Swal.fire({ 
      icon:'question',
      title:'Desea Eliminar esta nota?',
      text:'Estas seguro',
      showCancelButton: true,
      showConfirmButton:true,
    }).then(result => {
      if (result.value) {
        this.notasService.deleteNota(notas).subscribe(() => {
          this.setNotesList();
          Swal.fire('Nota eliminada!', 'Nota eliminada con exito', 'success');
        }, error => {
          Swal.fire('Error!', 'Ocurrio un error', 'error');
          console.log(error)
        });
      }
    })  
  }

  SearchByDateNote(): void {
      
    //  fecha = this.fecha;
    const notas: Notas = {
      update_date: this.buscarFecha.value.update_date
    }; 
    this.notasService.consultarPorFecha(notas).subscribe(data => {

      this.listarFechas = data.notas;
      console.log(notas);
      
      if (this.listarFechas.length === 0) { 
        this.fecha = null;
      }
      
      this.fecha = null;
      this.notas = data.notas;
      // console.log("Si hay notas");
      console.log(data.notas);
    }, error => {
      console.log(error);
    });

  }

  logOut(){
    this.auth.removeStorage();
    this.router.navigate(['/login']);
  }
}
