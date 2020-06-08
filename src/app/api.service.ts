import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  './User';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8000";

  constructor(private httpClient: HttpClient) {}

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