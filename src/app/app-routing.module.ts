import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NormesComponent } from './components/normes/normes.component';
import { NormeDetailsComponent } from './components/normes/norme-details/norme-details.component';
import { AddNormeComponent } from './components/normes/add-norme/add-norme.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";
import {AjoutFournisseurComponent} from "./components/fournisseur/ajout-fournisseur/ajout-fournisseur.component";
import {UpdateFournisseurComponent} from "./components/fournisseur/update-fournisseur/update-fournisseur.component";
import {EchantillonComponent} from "./components/echantillon/echantillon.component";
import {AjoutEchantillonComponent} from "./components/echantillon/ajout-echantillon/ajout-echantillon.component";
import {EchantillonDetailsComponent} from "./components/echantillon/echantillon-details/echantillon-details.component";
import {PlanificationComponent} from "./components/planification/planification.component";
import {ReactifsComponent} from "./components/reactifs/reactifs.component";
import {AddReactifComponent} from "./components/reactifs/add-reactif/add-reactif.component";
import {OutilsComponent} from "./components/outils/outils.component";
import {AddOutilComponent} from "./components/outils/add-outil/add-outil.component";
import {UtilisateursComponent} from "./components/utilisateurs/utilisateurs.component";
import {AddUtilisateurComponent} from "./components/utilisateurs/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./components/utilisateurs/update-utilisateur/update-utilisateur.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "patients", component: PatientsComponent},
  {path: "patient-details/:id", component: PatientDetailsComponent},
  {path: "add-patient", component: AddPatientComponent},
  {path: "normes", component: NormesComponent},
  {path: "norme-details/:id", component: NormeDetailsComponent},
  {path: "add-norme", component: AddNormeComponent},
  {path: "users", component: UsersComponent},
  {path: "add-user", component: AddUserComponent},
  {path: "user-details/:id", component: UserDetailsComponent},
  {path: "fournisseurs", component: FournisseurComponent},
  {path: "addfournisseur", component: AjoutFournisseurComponent},
  {path: "updatefournisseur/:id", component: UpdateFournisseurComponent},
  {path: "echantillons", component: EchantillonComponent},
  {path: "addechantillon", component: AjoutEchantillonComponent},
  {path: "echantillon-details/:id", component: EchantillonDetailsComponent},
  {path: "fournisseurs", component: FournisseurComponent},
  {path: "addfournisseur", component: AjoutFournisseurComponent},
  {path: "updatefournisseur/:id", component: UpdateFournisseurComponent},
  {path: "echantillons", component: EchantillonComponent},
  {path: "addechantillon", component: AjoutEchantillonComponent},
  {path: "Reactif",component: ReactifsComponent},
  {path: "AddReactif", component: AddReactifComponent},
  {path: "Outil", component: OutilsComponent},
  {path: "AddOutil", component: AddOutilComponent},
  {path: "Utilisateur", component: UtilisateursComponent},
  {path: "AddUtilisateur", component: AddUtilisateurComponent},
  {path: "updateUtilisateur/:id", component: UpdateUtilisateurComponent},
  {path: "echantillon-details/:id", component: EchantillonDetailsComponent},
  {path: "planification", component: PlanificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
