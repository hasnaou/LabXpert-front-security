import {Role} from "../enum/role";

export interface Utilisateur {
  idUtilisateur?: number;
  "nom": string;
  "prenom": string,
  "sexe": string,
  "dateNaissance": Date,
  "tel": string,
  "adresse": string,
  "role": Role,
  "password": string,
  "nomUtilisateur": string
}
