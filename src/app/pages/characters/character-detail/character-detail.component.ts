import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {


  editedName: string = '';


  characterId: string | undefined;
  id: any
  image: any
  name: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    //console.log("algo",idParam);
    if (idParam !== null) {
      this.characterId = idParam;
    }

    this.route.queryParams.subscribe(params => {
      // Recupera los parámetros que deseas
      console.log(params['imagenC']);
      this.id = params['idC'],
        this.image = params['imagenC'],
        this.name = params['nameC'];

      

      // Accede a los parámetros que necesitas y haz lo que desees con ellos
    });
  }


  saveData() {
    localStorage.setItem("characterUpdate", JSON.stringify({
      id: this.id,
      name: this.editedName,
      image: this.image
    }));
  }




}
