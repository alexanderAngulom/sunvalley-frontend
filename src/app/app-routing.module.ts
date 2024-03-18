import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'character-list',pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./pages/home.module').then(m => m.HomeModule) }, 
{ path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule) }, 
{ path: 'character-list', loadChildren: () => import('./pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
{ path: 'character-detail', loadChildren: () => import('./pages/characters/character-detail/character-detail.module').then(m => m.CharacterDetailModule) },
{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
{ path: '**', loadChildren: () => import('./pages/notFound/not-fount.module').then(m => m.NotFountModule) }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
