import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Characters } from '@app/shared/models/Characters.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent implements OnInit {
  @Input() character: Characters | undefined
  constructor() { }

  ngOnInit(): void {
    console.log();
    
  }

}
