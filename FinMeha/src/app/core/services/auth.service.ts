import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:32779/api';

  constructor(private http: HttpClient) { }

  register(userData: any):Observable<any> {
    return this.http.post(`${this.apiUrl}/register`,userData);
  }

  login(credentials: any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response:any) => {
        if(response.token){
        }
      })
    )
  }
}
