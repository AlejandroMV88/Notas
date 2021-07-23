import { Injectable } from '@angular/core';
import { Journal } from '../shared/models/journal.model';
import { Login } from '../shared/models/Login.model';
import { Security } from '../shared/models/security.model';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  security: Security = new Security();
  journal: Journal = new Journal();
  login: Login = new Login();

  constructor() { }
}
