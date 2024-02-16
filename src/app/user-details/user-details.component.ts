import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserRole } from '../models/user.model';
import { UserService } from '../services/user.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  view!: boolean;

  @Input() currentUser: User = {
    nom: '',
    prenom: '',
    adresse: '',
    sexe: '',
    tel: '',
    nomUtilisateur: '',
    password: '',
    role: UserRole.Technicien
  };

  constructor(private userService: UserService,private datePipe: DatePipe, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params["id"]);
    this.route.queryParams.subscribe((queryParams) => {
      this.view = queryParams['view'] === 'true';
      console.log(this.view);
    });
  }

  getUser(id: number): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          // this.currentUser.dateNaissance = this.datePipe.transform(this.currentUser.dateNaissance, 'yyyy-MM-dd');
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  updateUser(): void {
    this.userService.update(this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      })
  }

}
