import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Login } from 'src/app/shared/models/Login.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  loading = false;
  registrar: FormGroup; 
  constructor(private fb : FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.registrar = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      usuario: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ''
    }, {Validators: this.checkPassword});
   }

  ngOnInit(): void {
  }

  registrarUsuario(){
    console.log(this.registrar);
    const login: Login = {
      name: this.registrar.value.nombre,
      lastName: this.registrar.value.apellido,
      userName: this.registrar.value.usuario,
      password: this.registrar.value.password,
    };
    
      this.loading = true;
      this.auth.guadarUsuario(login).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
      Swal.fire({
        title: 'Exitoso!',
        text: 'el Usuario ' + login.userName + ' fue Registrado con Exito',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  CrearNota(): void {
    
  }

  checkPassword(group: FormGroup){
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true};
  }

}
