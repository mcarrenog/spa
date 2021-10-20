import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
 
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe: Heroe;
  constructor(
    private activateRoute:ActivatedRoute,
    private _heroeService: HeroesService
    ) { 

    this.activateRoute.params.subscribe(params => {
      
      console.log(params['id']);
      this.heroe = _heroeService.GetHeroe(params['id']);
      

  });
  }


 

}
