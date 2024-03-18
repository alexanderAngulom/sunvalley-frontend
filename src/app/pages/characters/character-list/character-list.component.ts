import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$=this.dataservice.characters$;
  
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    console.log(this.characters$);

  }

}
