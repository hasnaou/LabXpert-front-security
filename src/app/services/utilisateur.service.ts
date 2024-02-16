import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = environment.url;
  private readonly ENDPOINT = "utilisateur";

  constructor(
    private http: HttpClient
  ) {
  }


  public getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.url}/${this.ENDPOINT}`);
  }

  public getUtilisateurById(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.url}/${this.ENDPOINT}`, utilisateur);
  }

  public deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${this.ENDPOINT}/${id}`);
  }

  public updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.url}/${this.ENDPOINT}/${id}`, utilisateur);
  }
}
