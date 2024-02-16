import { Component, OnInit } from '@angular/core';
import { NormeService } from '../../services/norme.service';
import { Norme } from '../../models/norme.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-normes',
  templateUrl: './normes.component.html',
  styleUrls: ['./normes.component.css']
})
export class NormesComponent implements OnInit {

  normes: Norme[];
  currentNorme: Norme = {};
  currentIndex= -1;

  constructor(private normeService: NormeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveNormes()
  }

  retrieveNormes(): void {
    this.normeService.getAll()
      .subscribe({
        next: (data) => {
          this.normes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  deleteNorme(n:Norme): void {
    if(confirm("Voulez vous supprimer cette Norme?")){
      this.normeService.delete(n.idNorme).subscribe(
        () => {
          console.log('Norme supprime avec succes');
          this.normes.splice(this.normes.indexOf(n));
        },
        (error) => {
          console.error('Erreur lors de la suppression du Norme', error);
        });
    }
  }

}
