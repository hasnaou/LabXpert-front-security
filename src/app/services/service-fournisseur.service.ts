import { Injectable,Inject  } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../models/fournisseur";
import {map, Observable} from "rxjs";

@Injectable()
export class FournisseurService {

  constructor(private http:HttpClient,@Inject('url_fournisseur') private url: string) { }

  public getAllFournisseur(){
    return this.http.get(this.url);
  }
  public addFournisseur(f:Fournisseur){
    return this.http.post(this.url,f);
  }
  public updateFournisseur(f:Fournisseur){
    console.log(f);
    return this.http.put(this.url,f);
  }
  public delFournisseur(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  public getFournisseurWithId(id: string):Observable<Fournisseur>{
    return this.http.get<Fournisseur>(this.url+"/"+id);
  }
}
