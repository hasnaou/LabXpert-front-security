import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Echantillon} from "../models/echantillon.model";

@Injectable({
  providedIn: 'root'
})
export class EchantillonService {

  constructor(private http:HttpClient,@Inject('url_echantillon') private url: string) { }
  public getEchantillons():Observable<Echantillon[]>{
    return this.http.get<Echantillon[]>(this.url);
  }

  public addEchantillon(echantillon:Echantillon){

    return this.http.post(this.url,echantillon);
  }
  public getEchantillonById(id:number):Observable<Echantillon>{
    // @ts-ignore
    return this.http.get<Echantillon>(this.url+"/"+id);
  }
  public updateEchantillon(echantillon:Echantillon){
    return this.http.put(this.url,echantillon);
  }
}
