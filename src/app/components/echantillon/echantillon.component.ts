import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../services/echantillon.service";
import {Echantillon} from "../../models/echantillon.model";

@Component({
  selector: 'app-echantillon',
  templateUrl: './echantillon.component.html',
  styleUrls: ['./echantillon.component.css']
})
export class EchantillonComponent implements OnInit {

  echantillons?:Echantillon[];
  searchech: '';
  constructor(private echantillonService:EchantillonService) { }

  ngOnInit(): void {
    this.echantillonService.getEchantillons().subscribe(
      data=>{this.echantillons=data;},
      error => {
        console.log(error);}
    );
  }

}
