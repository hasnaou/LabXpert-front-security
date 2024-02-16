import { Component, OnInit } from '@angular/core';
import {EchantillonService} from "../../services/echantillon.service";
import {AnalyseService} from "../../services/analyse.service";
import {Analyse} from "../../models/analyse.model";

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css']
})
export class PlanificationComponent implements OnInit {

  analyses?:Analyse[];
  searchech: '';
  constructor(private echantillonService:EchantillonService,private analyseservice:AnalyseService) { }

  ngOnInit(): void {
    this.analyseservice.getanalyses().subscribe(
      data=>{
        this.analyses=data;
        console.log(this.analyses)},
      error => {
        console.log(error);}
    );
  }


}
