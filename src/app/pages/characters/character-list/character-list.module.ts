import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharactersCardModule } from "@app/pages/characters/characters-card/characters-card.module";

@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharactersCardModule
  ]
})
export class CharacterListModule { }
