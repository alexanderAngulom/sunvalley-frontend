import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharacterDetailRoutingModule
  ]
})
export class CharacterDetailModule { }
