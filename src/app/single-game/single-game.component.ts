import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {

  game:any;
  id:any;
  
  constructor(private gameService:GameDataService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    });
   }

  ngOnInit(): void {

    this.gameService.getGame(this.id).then(response=>{
      this.game = response;
      console.log(response)
    })
  
  }

  

}
