import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import * as http from "http";
import {Observable} from "rxjs";
import {Analyse} from "../models/analyse.model";

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  private url=environment.apiUrl+"/analyse"
  constructor(private http:HttpClient) { }

  public getanalyses():Observable<Analyse[]>{

    return this.http.get<Analyse[]>(this.url);
  }
}
