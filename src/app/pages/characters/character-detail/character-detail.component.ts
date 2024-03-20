import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
} from '@angular/material/dialog';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],

})
export class CharacterDetailComponent implements OnInit {


  editedName: string = '';


  characterId: string | undefined;
  id: any
  image: any
  name: any
  buttonDisabled: boolean = false;
  loading: boolean = false;


  constructor(private route: ActivatedRoute,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.characterId = idParam;
    }

    this.route.queryParams.subscribe(params => {
      // Recupera los parámetros que deseas
      console.log(params['imagenC']);
      this.id = params['idC'],
        this.image = params['imagenC'],
        this.name = params['nameC'];
    });
  }


  saveData() {
    this.buttonDisabled = true;
    this.loading = true;

    localStorage.setItem("characterUpdate", JSON.stringify({
      id: this.id,
      name: this.editedName,
      image: this.image
    }));
    //this.openDialog()
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/character-list']).then(()=>{
        window.location.reload()
      });
    }, 2000);
  }



}
