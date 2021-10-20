import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-heroe',
  templateUrl: './filtro-heroe.component.html',
  styleUrls: ['./filtro-heroe.component.css']
})
export class FiltroHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino: string ;

  constructor( 
    private _heroesService: HeroesService,
    private activateRoute:ActivatedRoute
    ) {
    // console.log('Constructor');

    
   }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.BuscarHeroe(params['termino']);
      

  });

  }
  VerHeroe(termino: string)
  {
    console.log(termino);
    
    this.heroes = this._heroesService.BuscarHeroe(termino);

    console.log(this.heroes);
    
  }

}
