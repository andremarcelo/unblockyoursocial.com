import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  './User';
import { Observable } from  'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8000";

  constructor(private httpClient: HttpClient) {

    if (environment.production) {
      this.PHP_API_SERVER  = 'https://unblockyoursocial.com';
    }
    if (environment.dev) {
      this.PHP_API_SERVER  = 'https://kl23j4pkj.unblockyoursocial.com';
    }
  }

  userList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  // get autenticated user.
  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/user`);
  }

  //register
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/register`, user);
  }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/login`, user);
  }

  updateUser(policy: User){
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/update.php`, policy);
  }

  inactiveUser(id: number){
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

}