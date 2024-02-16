import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {UtilisateurService} from "../../../services/utilisateur.service";
import {Utilisateur} from "../../../models/utilisateur";
import {formatDate} from "@angular/common";
import {Role} from "../../../enum/role";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  formUtilisateur: FormGroup;

  utilisateur: Utilisateur = {
    nom: "",
    prenom: "",
    sexe: "",
    dateNaissance: new Date(),
    tel: "",
    adresse: "",
    role: null,
    nomUtilisateur: "",
    password: ""
  }

  constructor(private serviceUtilisateur: UtilisateurService, private router: Router) {
    this.formUtilisateur = new FormGroup({
      nom: new FormControl("", Validators.required),
      prenom: new FormControl("", Validators.required),
      sexe: new FormControl("", Validators.required),
      dateNaissance: new FormControl("", Validators.required),
      adresse: new FormControl("", Validators.required),
      tel: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
      nomUtilisateur: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {

  }

  addUtilisateur() {
    console.log(this.formUtilisateur.value);
    this.serviceUtilisateur.addUtilisateur(this.formUtilisateur.value).subscribe(
      (response: Utilisateur) => {
        // this.serviceUtilisateur.addUtilisateur()
        console.log("L'utilisateur a été ajouter avec success", response);
      },
      (error) => {
        console.log("===========================Start Erreur :===================================");
        console.log("Erreur d'ajouter un utilisateur :" + error);
        console.log("============================End Erreur =====================================");
      },
      () => {
        this.router.navigate([
          "/Utilisateur"
        ])
      }
    )

  }

  protected readonly Role = Role;
}
