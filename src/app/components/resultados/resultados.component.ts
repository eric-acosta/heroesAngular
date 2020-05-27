import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params => {
       this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      
    });
    
  

  }
  // verHeroe( idx:number){
  //   this._router.navigate(['/heroe',idx]);
  // }

}
