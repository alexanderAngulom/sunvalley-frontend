import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject, take, tap } from 'rxjs';
import { Dataresponse } from '../models/data.interface';
import { Episodes } from '../models/Episodes.interface';
import { Characters } from '../models/Characters.interface';


const characters = gql`
query {
  
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
        //  this.episodeSubject.next(episodes.results)
        let lastItemCharacter = localStorage.getItem('characterUpdate')
        if (lastItemCharacter!=null) {
          let responseCharacter = this.getDataUpdate(characters.results,JSON.parse(lastItemCharacter))
          console.log(responseCharacter);
          this.charactersSubject.next(responseCharacter)
        }else{
          this.charactersSubject.next(characters.results)

        }
      })
    ).subscribe()
  }
  private getDataUpdate(characters: any[], lastItemCharacter: any) {
    const charactersCopy = [...characters]; 
    const index = charactersCopy.findIndex((character: any) => character.id === lastItemCharacter.id);
    console.log("getDataUpdate", index);
    return characters;
  }
  
  
}
