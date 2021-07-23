import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { AuthUser } from 'src/app/shared/models/auth-user.model';
import { Login } from 'src/app/shared/models/Login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser: AuthUser = new AuthUser();

  constructor(private http: HttpClient) {}

 

  guardarStorage(): AuthUser{
  // sessionStorage.setItem('token',JSON.stringify( this.token ));
    sessionStorage.setItem('token', this.authUser.token );
    return new AuthUser();
  }


  leerStorage(): string{
     let token: string;
     token = sessionStorage.getItem('token');
      return token;
    }

  removeStorage(): string{
    let token: string;
    sessionStorage.clear();
     return token;
    }

  signIn(dictionary: DictionaryService): Observable<any> {
    let json = {
      username: dictionary.login.userName,
      password: dictionary.login.password,
    };
    return this.http.post('http://localhost:20700/api/Authentication/login',json);
  }
  
  guadarUsuario(login: Login): Observable<any>{
   
    return this.http.post('http://localhost:20700/api/Authentication/' + "addUser", login);
  }
}
