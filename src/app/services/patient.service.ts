import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../models/patient.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url=environment.apiUrl+"/patient";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

  get(id: any): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(this.url, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
