import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// }; // this is not reqd as in app.module.ts we have added JwtModule in imports to take care of token

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<User> {

    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

}
