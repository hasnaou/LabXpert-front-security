import { HttpClient } from '@angular/common/http';
import { Patient } from '../../models/patient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{

  patients?: Patient[];
  currentPatient: Patient = {};
  currentIndex = -1;

  constructor(private patientService: PatientService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrievePatients();
  }

  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  deletePatient(id: number): void {
    this.patientService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patients']);
        },
        error: (e) => console.error(e)
      })
  }

}
