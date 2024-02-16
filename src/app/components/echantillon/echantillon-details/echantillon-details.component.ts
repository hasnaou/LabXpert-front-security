import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../../models/patient.model";
import {Echantillon} from "../../../models/echantillon.model";
import {PatientService} from "../../../services/patient.service";
import {EchantillonService} from "../../../services/echantillon.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {DatePipe} from "@angular/common";
import {StatusEchantillon} from "../../../enum/status-echantillon";

@Component({
  selector: 'app-echantillon-details',
  templateUrl: './echantillon-details.component.html',
  styleUrls: ['./echantillon-details.component.css']
})
export class EchantillonDetailsComponent implements OnInit {
  id:number;
  patients?: Patient[];
  search= '';
  showddiv=false;
  patient:Patient;
  submitted=false;
  @Input() echantillon: Echantillon = new Echantillon();

  constructor(private patientService:PatientService,private router: Router,private datePipe: DatePipe,private echantillonService:EchantillonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.echantillonService.getEchantillonById(this.id).subscribe(
      data=>{
        this.echantillon.idEchantillon=data.idEchantillon;
          this.echantillon.patient=data.patient;
          // @ts-ignore
          this.echantillon.patient.dateNaissance=this.datePipe.transform(this.echantillon.patient.dateNaissance, 'yyyy-MM-dd');
          this.echantillon.utilisateur=data.utilisateur;
          this.echantillon.utilisateur.dateNaissance=this.datePipe.transform(this.echantillon.utilisateur.dateNaissance, 'yyyy-MM-dd');
          this.echantillon.typeAnalyse=data.typeAnalyse;
          // @ts-ignore
          this.echantillon.datePrelevement= this.datePipe.transform(data.datePrelevement, 'yyyy-MM-dd');
          this.echantillon.status=data.status
      },error => {console.log(error);
      },
      ()=>{
        console.log(this.echantillon)
      }
    );
  }
  updateechantillon(){
    const data={
      idEchantillon: this.echantillon.idEchantillon,
      patient: this.echantillon.patient,
      utilisateur:this.echantillon.utilisateur,
      datePrelevement: this.echantillon.datePrelevement,
      typeAnalyse: this.echantillon.typeAnalyse,
      status: this.echantillon.status,
      outilEchantillonList: null
    }
    console.log(data.status);
    this.echantillonService.updateEchantillon(data).subscribe({
      next: (res) => {
        //console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)


  });
    //console.log(data);
  }

  protected readonly StatusEchantillon = StatusEchantillon;
}
