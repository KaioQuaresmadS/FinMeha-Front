import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';
import { StorageService } from './storage.service'; // Importe o novo serviço

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl = 'https://finmehaapi-egf7acgkfehvgzar.canadacentral-01.azurewebsites.net/';

  constructor(private http: HttpClient, private storageService: StorageService) { }

  private currentUserSource = new BehaviorSubject<any | null>(null);
  currentUser$ = this.currentUserSource.asObservable();


  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/users/register`, userData)
    .pipe(
      tap((response: any)=> {
        if(response && response.token){
          //Usa o StorageService para armazenar o token
          this.storageService.setItem('auth_token', response.token);
          console.log('Token armazenado via StorageService:', response.token);
          //Você pode adicionar uma navegação para outra página aqui
        }
      })
    );
  }
}
