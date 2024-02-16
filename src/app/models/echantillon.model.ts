import {Patient} from "./patient.model";
import {StatusEchantillon} from "../enum/status-echantillon";
import {OutilEchantillon} from "./outil-echantillon";

export class Echantillon {
  idEchantillon:number;
  patient:Patient;
  utilisateur:any;
  datePrelevement:Date;
  typeAnalyse:string;
  status:StatusEchantillon;
  //private  analyses;
  outilEchantillonList:OutilEchantillon[];
}
