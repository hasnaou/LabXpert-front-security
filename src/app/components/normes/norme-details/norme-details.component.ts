import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Norme } from '../../../models/norme.model';
import { NormeService } from '../../../services/norme.service';

@Component({
  selector: 'app-norme-details',
  templateUrl: './norme-details.component.html',
  styleUrls: ['./norme-details.component.css']
})
export class NormeDetailsComponent implements OnInit {

  @Input() currentNorme: Norme = {
    libelle: '',
    maxValue: 0,
    minValue: 0,
    unite: ''
  };

  message = '';

  constructor(private normeService: NormeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getNorme(this.route.snapshot.params["id"])
    console.log(this.route.snapshot.params["id"])
  }

  getNorme(id: number): void {
    this.normeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentNorme = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  updateNorme(): void {
    this.normeService.update(this.currentNorme)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'La norme a été mis à jour avec succès !'
        },
        error: (e) => console.error(e),
        // @ts-ignore
        complete:()=>this.router.navigate(['/normes'])
      });
  }

}
