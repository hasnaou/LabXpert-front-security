import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Outil} from "../models/outil";
import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutilService {

  private url = environment.url;

  private readonly ENDPOINT="Outil";

  constructor(
    private http: HttpClient
  ) {}

  public getAllOutils(): Observable<Outil[]> {
    return this.http.get<Outil[]>(`${this.url}/${this.ENDPOINT}`);
  }

  public getReactifById(id:number): Observable<Object>  {
    return this.http.get(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public addOutil(outil: Outil): Observable<Outil> {
    return this.http.post<Outil>(`${this.url}/${this.ENDPOINT}`, outil);
  }

  public deleteOutil(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public updateOutil(id:number, outil:Outil):Observable<Outil>  {

    // return this.http.put<void>(this.url + "/" + id, commande);
    return this.http.put<Outil> (`${this.url}/${this.ENDPOINT}/${id}`, outil);
  }
}
