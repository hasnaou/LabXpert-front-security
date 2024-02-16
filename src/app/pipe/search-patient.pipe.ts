import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPatientPipe'
})
export class SearchPatientPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {
    if (!searchValue) return value;
    return value.filter((v: { nom: string; prenom: string;tel: string; }) =>
      v.nom.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      v.prenom.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      v.tel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    )
  }

}
