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
    const ruta = '/character-detail';

    const params = {
      idC: id,
      imagenC: imagen,
      nameC: name
    };

    this.router.navigate([ruta], { queryParams: params });
  }

}
