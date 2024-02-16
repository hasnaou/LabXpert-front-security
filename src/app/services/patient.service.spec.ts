import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';
import { Patient } from '../models/patient.model';
import {Inject} from "@angular/core";
import {environment} from "../../environments/environment";

describe('PatientService', () => {
  let service: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all patients', () => {
    const dummyPatients: Patient[] = [
      { id: 1, nom: 'hasna', prenom: 'oubali', adresse: '123 lot', dateNaissance: new Date(), sexe: 'Female', tel: '123456789' },
      { id: 2, nom: 'ayoub', prenom: 'oubali', adresse: '456 Avenue', dateNaissance: new Date(), sexe: 'Male', tel: '987654321' }
    ];

    service.getAll().subscribe(patients => {
      expect(patients.length).toBe(2);
      expect(patients).toEqual(dummyPatients);
    });

    const req = httpMock.expectOne(environment+"/patient");
    expect(req.request.method).toBe('GET');
    req.flush(dummyPatients);
  });

  it('should create a new patient', () => {
    const newPatient: Patient = { nom: 'New', prenom: 'Patient', adresse: '789 Road', dateNaissance: new Date(), sexe: 'Male', tel: '555555555' };

    service.create(newPatient).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(environment+"/patient");
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should update a patient', () => {
    const updatedPatient: Patient = { id: 1, nom: 'Updated', prenom: 'Patient', adresse: '789 Road', dateNaissance: new Date(), sexe: 'Male', tel: '555555555' };

    service.update(updatedPatient).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(environment+"/patient");
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete a patient', () => {
    const patientId = 1;

    service.delete(patientId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(environment+"/patient/${patientId}");
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
