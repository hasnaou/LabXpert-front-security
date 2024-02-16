import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Utilisateur} from "../../models/utilisateur";
import {UtilisateurService} from "../../services/utilisateur.service";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: Utilisateur[] | null | undefined;

  constructor(
    private utilisateurService: UtilisateurService
  ) {
  }

  ngOnInit(): void {
    this.utilisateurService.getAllUtilisateurs()
      .subscribe(
        data => {
          this.utilisateurs = data;
        },
        (error) => {
          console.log(error);
        })
  }

  deleteUtilisateur(utilisateur: Utilisateur) {
    if (window.confirm("Voulez vous supprimer cette Utilisateur ?")) {
      this.utilisateurService.deleteUtilisateur(utilisateur.idUtilisateur)
        .subscribe(
          () => {
            this.utilisateurs?.splice(this.utilisateurs?.indexOf(utilisateur));
            console.log("l'utilisateur avec l'ID " + utilisateur.idUtilisateur + " a été supprimer");
          },
          (error) => {
            console.log("===========================Start Erreur :" + utilisateur.idUtilisateur + "===================================");
            console.log("Erreur de la supprission de l'utilisateur avec l'ID:" + utilisateur.idUtilisateur + " : " + error);
            console.log("============================Fin Erreur :" + utilisateur.idUtilisateur + "=====================================");
          }
        )
    }

  }
}
