import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/Login.model';


// import { CookieService } from 'ngx-cookie-service';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  public userName: string = "";
  public password: string = "";

  constructor( 
    private router: Router,
    
    // private cookieService : CookieService,
    private dictionary: DictionaryService,
    private auth: AuthService) { 

  }
  ngOnInit(): void {
  }

  log() {
    this.dictionary.login.userName = this.userName;
    this.dictionary.login.password = this.password;
    
    this.loading = true;
    this.auth.signIn(this.dictionary)
      .subscribe(result => {
     
        this.auth.authUser.token = result.token;

        this.auth.guardarStorage();
      
        this.router.navigate(['home']);
      },
        error => {
          Swal.fire({
            title: 'Error!',
            text: 'Usuario o Contraseña incorrecto',
            icon: 'error'
          })
          console.log(error);
         this.loading = false;
        }
      )
  }
 
}
