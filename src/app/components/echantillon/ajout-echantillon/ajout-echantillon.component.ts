import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {EchantillonService} from "../../../services/echantillon.service";
import {Patient} from "../../../models/patient.model";
import {Echantillon} from "../../../models/echantillon.model";
import {StatusEchantillon} from "../../../enum/status-echantillon";
import {OutilEchantillon} from "../../../models/outil-echantillon";
import {OutilService} from "../../../services/outil.service";
import {Outil} from "../../../models/outil";

@Component({
  selector: 'app-ajout-echantillon',
  templateUrl: './ajout-echantillon.component.html',
  styleUrls: ['./ajout-echantillon.component.css']
})
export class AjoutEchantillonComponent implements OnInit {
  patients?: Patient[];
  search= '';
  showddiv=false;
  patient:Patient;
  outils:Outil[];
  selectedOutilQuantite:number=0;
  selectedOutil:Outil={
    deleted: false,
    fournisseurIdFournisseur: 0,
    idOutil:0,
    quantite:0,
    libelle:''
};
  selectedOutillist:OutilEchantillon={
    outil:this.selectedOutil,
    quantite:0
  };
  listmateriel:OutilEchantillon[]=[];
  submitted=false;
  echantillon: Echantillon = new Echantillon();
  constructor(private patientService:PatientService,private echantillonService:EchantillonService,private outilService:OutilService) { }

  ngOnInit(): void {
    this.retrievePatients();
    this.outilService.getAllOutils().subscribe(
      // @ts-ignore
      data=>this.outils=data,
      error => {
        console.log(error)},
      () => {
        //console.log(this.outils);
      }
    );
  }
  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
        },
        error: (e) => console.error(e)
      })
  }
  showPatient(id:number){
    // @ts-ignore
    this.patient=this.patients[id];
    this.showddiv=true;
  }
  addechantillon(){
    console.log(this.echantillon.outilEchantillonList);
        const data={
          idEchantillon: null,
          patient: this.patient,
          utilisateur:{"id": 69},
          datePrelevement: this.echantillon.datePrelevement,
          typeAnalyse: this.echantillon.typeAnalyse,
          status: StatusEchantillon.EnAttente,
          outilEchantillonList: this.echantillon.outilEchantillonList
        }
        this.echantillonService.addEchantillon(data).subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    //console.log(data);
  }
  addtomateriel(){
    //console.log(this.selectedOutil.idOutil);
    this.selectedOutillist.outil=this.selectedOutil;
    this.selectedOutillist.quantite=this.selectedOutilQuantite;
    this.listmateriel.push(this.selectedOutillist)
    console.log(this.listmateriel);
  }
}
