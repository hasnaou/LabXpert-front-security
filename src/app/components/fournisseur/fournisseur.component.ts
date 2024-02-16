import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FournisseurService} from "../../services/service-fournisseur.service";
import {Fournisseur} from "../../models/fournisseur";
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fournisseurs:any;
  searchText: string = '';
  constructor(private http:HttpClient,private fournisseurService:FournisseurService ) { }

  ngOnInit(): void {
    this.fournisseurService.getAllFournisseur().subscribe(data => {
      this.fournisseurs = data;
    }, error => {
      console.log(error);
    })

  }

  delF(f:Fournisseur){
    if(confirm("Voulez vous supprimer ce Fournisseur?")){
      //console.log(f.idFournisseur)
    this.fournisseurService.delFournisseur(f.idFournisseur).subscribe(
      () => {
        console.log('Fournisseur supprime avec succes');
        this.fournisseurs.splice(this.fournisseurs.indexOf(f));
      },
      (error) => {
        console.error('Erreur lors de la suppression du Fournisseur', error);
      });
    }
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
