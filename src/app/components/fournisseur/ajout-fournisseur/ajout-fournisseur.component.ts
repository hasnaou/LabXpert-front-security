import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FournisseurService} from "../../../services/service-fournisseur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {
  form:FormGroup;

  constructor(private fournisseurService:FournisseurService,private router: Router,
  ) {
    this.form=new FormGroup({
      nom : new FormControl('',Validators.required),
      tel : new FormControl('',Validators.required),
      adresse : new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {

  }
  addF(){
    this.fournisseurService.addFournisseur(this.form.value).subscribe(
      (response) => {
        console.log("Fournisseur ajouter avec success", response);
      },
      (error) => {
        console.error('Ajout Fournisseur pas reussi', error);
      },()=>{
        this.router.navigate(['/fournisseurs']);
      }
    );
  }
}
