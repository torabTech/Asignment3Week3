import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

 /*  game1:Games ={
    title : "game1",
    price : 11,
    year : '2014'
  };

  game2:Games ={
    title : "game2",
    price : 12,
    year : '2014'
  };

  games:Games[] = [this.game1,this.game2]; */

  games:any;
  constructor(private gameService: GameDataService) { }

  ngOnInit(): void {
    this.gameService.getGames().then(response => {
      this.games = response;
      console.log(response);
    });

  }

}

export class Games{
  title!:string;
  price!:number;
  year!:string
}
