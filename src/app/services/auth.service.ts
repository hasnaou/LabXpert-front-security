import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  roles : any;
  username : any;
  accessToken: string;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    let loginForm = { username, password };
    return this.http.post('http://localhost:8080/api/auth/signin', loginForm);
  }

  loadProfile(data: any){
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    this.username = data['username'];
    this.roles = data['roles'];
    console.log('h' + this.username + this.roles);
  }
}
