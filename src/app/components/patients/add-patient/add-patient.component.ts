import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = {
    adresse: '',
    dateNaissance: new Date(),
    nom: '',
    prenom: '',
    sexe: '',
    tel: ''
  }

  submitted = false;

  constructor(private patientService: PatientService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  savePatient(): void {
    const data = {
      adresse: this.patient.adresse,
      dateNaissance: this.patient.dateNaissance,
      nom: this.patient.nom,
      prenom: this.patient.prenom,
      sexe: this.patient.sexe,
      tel: this.patient.tel
    }
    this.patientService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      })
  }

}
