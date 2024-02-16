import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'searchEchantillon'
})
export class SearchEchantillonPipe implements PipeTransform {

  transform(items: any[], searchech: string): any[] {
    if (!items) return [];
    if (!searchech) return items;

    searchech = searchech.toLowerCase();

    return items.filter(it => {
      return it.patient.nom.toLowerCase().includes(searchech) ||
        it.patient.prenom.toLowerCase().includes(searchech) ||
        it.typeAnalyse.toLowerCase().includes(searchech);
    });
  }
}
