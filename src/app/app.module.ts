import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AjoutFournisseurComponent } from './components/fournisseur/ajout-fournisseur/ajout-fournisseur.component';
import { FournisseurService } from "./services/service-fournisseur.service";
import { UpdateFournisseurComponent } from './components/fournisseur/update-fournisseur/update-fournisseur.component';
import { SearchPipe } from "./pipe/SearchPipe";
import { EchantillonComponent } from './components/echantillon/echantillon.component';
import { EchantillonService} from "./services/echantillon.service";
import { AjoutEchantillonComponent } from './components/echantillon/ajout-echantillon/ajout-echantillon.component';
import { SearchPatientPipe } from './pipe/search-patient.pipe';
import { SearchEchantillonPipe } from './pipe/search-echantillon.pipe';
import { EchantillonDetailsComponent } from './components/echantillon/echantillon-details/echantillon-details.component';
import { OutilService} from "./services/outil.service";
import { NormesComponent } from './components/normes/normes.component';
import { AddNormeComponent } from './components/normes/add-norme/add-norme.component';
import { NormeDetailsComponent } from './components/normes/norme-details/norme-details.component';
import { PlanificationComponent } from './components/planification/planification.component';
import {ReactifsComponent} from "./components/reactifs/reactifs.component";
import {OutilsComponent} from "./components/outils/outils.component";
import {UtilisateursComponent} from "./components/utilisateurs/utilisateurs.component";
import {AddUtilisateurComponent} from "./components/utilisateurs/add-utilisateur/add-utilisateur.component";
import {AddOutilComponent} from "./components/outils/add-outil/add-outil.component";
import {UpdateUtilisateurComponent} from "./components/utilisateurs/update-utilisateur/update-utilisateur.component";
import {AddReactifComponent} from "./components/reactifs/add-reactif/add-reactif.component";
import {ReactifService} from "./services/reactif.service";
import { LoginComponent } from './components/login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    ReactifsComponent,
    AddReactifComponent,
    OutilsComponent,
    AddOutilComponent,
    UtilisateursComponent,
    AddUtilisateurComponent,
    UpdateUtilisateurComponent,
    PatientDetailsComponent,
    AddPatientComponent,
    NormesComponent,
    AddNormeComponent,
    NormeDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    FournisseurComponent,
    AjoutFournisseurComponent,
    UpdateFournisseurComponent,
    EchantillonComponent,
    AjoutEchantillonComponent,
    SearchPatientPipe,
    EchantillonDetailsComponent,
    AddPatientComponent,
    FournisseurComponent,
    AjoutFournisseurComponent,
    UpdateFournisseurComponent,
    EchantillonComponent,
    AjoutEchantillonComponent,
    SearchPatientPipe,
    EchantillonDetailsComponent,
    PlanificationComponent,
    LoginComponent,
    AdminTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SearchPipe,
    ReactiveFormsModule,
    SearchEchantillonPipe,
    FormsModule
    ],
  providers: [
    ReactifService,
    OutilService,
    DatePipe,
    ReactiveFormsModule,
    FormsModule,
    SearchPipe,
    FormsModule,
    SearchPipe,
    FournisseurService,
    EchantillonService,
    OutilService,
    {provide: 'url_fournisseur', useValue: 'http://localhost:8080/api/v1/fournisseur'},
    {provide: 'url_echantillon', useValue: 'http://localhost:8080/api/v1/echantillon'},
    {provide: 'url_patient', useValue: 'http://localhost:8080/api/v1/patient'},
    {provide: 'url_outil', useValue: 'http://localhost:8080/api/v1/outil'},
    {provide: 'url_fournisseur', useValue: 'http://localhost:8080/api/v1/fournisseur'}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private datePipe: DatePipe) {
  }
}

