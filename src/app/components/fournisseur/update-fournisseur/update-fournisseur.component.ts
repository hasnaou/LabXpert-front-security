import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FournisseurService} from "../../../services/service-fournisseur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Fournisseur} from "../../../models/fournisseur";

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  id!: string;
  fournisseur!:Fournisseur
  form!:FormGroup;

  constructor(private fournisseurService: FournisseurService, private route: ActivatedRoute,private  router:Router
  ) {
    this.form=new FormGroup({
      idFournisseur:new FormControl('',Validators.required),
      nom : new FormControl('',Validators.required),
      tel : new FormControl('',Validators.required),
      adresse : new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        this.id=params['id'];
        this.fournisseurService.getFournisseurWithId(this.id).subscribe(
          (f:Fournisseur) =>{
            this.fournisseur=f;
            //console.log(this.fournisseur);
            this.form.patchValue({
              idFournisseur:this.fournisseur.idFournisseur,
              nom : this.fournisseur.nom,
              tel : this.fournisseur.tel,
              adresse : this.fournisseur.adresse,
            });
          },
          error => {
            console.log(error);}
        )
    }
    )
  }
  updateF(){
    this.fournisseurService.updateFournisseur(this.form.value).subscribe(
      (response) => {
        console.log("Fournisseur Modifier avec success", response);
      },
      (error) => {
        console.error('Modification Fournisseur pas reussi', error);
      },()=>{
        this.router.navigate(['/fournisseurs']);
      }
    );
  }
}
