import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject, take, tap } from 'rxjs';
import { Dataresponse } from '../models/data.interface';
import { Episodes } from '../models/Episodes.interface';
import { Characters } from '../models/Characters.interface';


const characters = gql`
query {
  episodes{
    results{
      name,
      episode
    }
  }
  ,
  characters {
    results {
      name,
      id,
      status,
      image,
      location{
        name
      },
      origin{
        name
      }
    }
    
  }
  
}

`;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodeSubject = new BehaviorSubject<Episodes[]>([]);
  episodes$ = this.episodeSubject.asObservable();

  private charactersSubject = new BehaviorSubject<Characters[]>([]);
  characters$ = this.charactersSubject.asObservable();


  constructor(private apollo: Apollo) {
    this.getDataApi();
  }


  private getDataApi() {
    this.apollo.watchQuery<Dataresponse>({
      query: characters
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { characters, episodes } = data
        console.log(episodes);

        //  this.episodeSubject.next(episodes.results)
        let lastItemCharacter = localStorage.getItem('characterUpdate')
        if (lastItemCharacter != null) {
          let responseCharacter = this.getDataUpdate(characters.results, JSON.parse(lastItemCharacter))
          console.log(lastItemCharacter, responseCharacter);
          this.charactersSubject.next(responseCharacter)
        } else {
          this.charactersSubject.next(characters.results)


        }
        this.episodeSubject.next(episodes.results)
      })
    ).subscribe()
  }

  //se gace una copia para no alterar la origianl y solo guarda 1 array en localstroage y solo se edita el nombre
  private getDataUpdate(characters: any[], lastItemCharacter: any) {
    const charactersCopy = JSON.parse(JSON.stringify(characters));
    const index = charactersCopy.findIndex((character: any) => character.id === lastItemCharacter.id);
    console.log("getDataUpdate", charactersCopy[index], lastItemCharacter['name']);
    charactersCopy[index]['name'] = lastItemCharacter['name'];
    return charactersCopy;
  }

}
