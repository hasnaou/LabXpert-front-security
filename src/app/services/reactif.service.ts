import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Reactif} from "../models/reactif";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReactifService {

  private url = environment.url;

  private readonly ENDPOINT="Reactif";

  constructor(
    private http: HttpClient
  ) {}

  public getAllReactifs(): Observable<Reactif[]> {
    return this.http.get<Reactif[]>(`${this.url}/${this.ENDPOINT}`);
  }

  public getReactifById(id:number): Observable<Object>  {
    return this.http.get(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public addReactif(reactif: Reactif): Observable<Reactif> {
    return this.http.post<Reactif>(`${this.url}/${this.ENDPOINT}`, reactif);
  }

  public deleteReactif(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public updateReactif(id:number, reactif:Reactif):Observable<Reactif>  {

    // return this.http.put<void>(this.url + "/" + id, commande);
    return this.http.put<Reactif> (`${this.url}/${this.ENDPOINT}/${id}`, reactif);
  }

}
