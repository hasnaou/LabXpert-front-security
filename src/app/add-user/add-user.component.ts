import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserService } from '../services/user.service';
import { User, UserRole } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
    nom: '',
    prenom: '',
    adresse: '',
    sexe: '',
    tel: '',
    nomUtilisateur: '',
    password: '',
    role: UserRole.Technicien,
  }

  submitted = false;

  userRoles = Object.values(UserRole);

  constructor(private userService: UserService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      nom: this.user.nom,
      prenom: this.user.prenom,
      adresse: this.user.adresse,
      sexe: this.user.sexe,
      tel: this.user.tel,
      nomUtilisateur: this.user.nomUtilisateur,
      password: this.user.password,
      role: this.user.role
    }
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      })
  }

}
