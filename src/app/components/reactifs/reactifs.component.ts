import { Component, OnInit } from '@angular/core';
import {ReactifService} from "../../services/reactif.service";
import {Reactif} from "../../models/reactif";

@Component({
  selector: 'app-reactifs',
  templateUrl: './reactifs.component.html',
  styleUrls: ['./reactifs.component.css']
})
export class ReactifsComponent implements OnInit {

  reactifs:Reactif[]=[];


  constructor(
    private reactifService: ReactifService
  ) { }

  ngOnInit(): void {
  }

}
