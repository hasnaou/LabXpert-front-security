import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Norme } from '../models/norme.model';

const baseUrl = 'http://localhost:8080/api/v1/norme'

@Injectable({
  providedIn: 'root'
})
export class NormeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Norme[]> {
    return this.http.get<Norme[]>(baseUrl);
  }

  get(id: any): Observable<Norme> {
    return this.http.get<Norme>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {    
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
