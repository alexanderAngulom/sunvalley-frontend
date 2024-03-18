import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Characters } from '@app/shared/models/Characters.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent implements OnInit {
  @Input() character: Characters | undefined
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log();
    
  }

  navigateToSpecificRouteWithParams(id:any,imagen:any,name:any): void {
    // Especifica la ruta a la que quieres navegar
    const ruta = '/character-detail';

    // Crea un objeto con los parámetros que deseas pasar
    const params = {
      idC: id,
      imagenC: imagen,
      nameC: name
      // Agrega todos los parámetros que desees pasar
    };

    // Llama al método navigate del Router y pasa la ruta y los parámetros
    this.router.navigate([ruta], { queryParams: params });
  }

}
