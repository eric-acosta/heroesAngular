import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any={}
  logo:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService: HeroesService) { 

    this.activatedRoute.params.subscribe(params => {
     
      this.heroe= this._heroesService.getHeroe(params['id']);
      if (this.heroe.casa=="DC")
        this.logo='assets/img/dc.png'
      else
        this.logo='assets/img/marvel.png'
      
    });

  }

  

}
