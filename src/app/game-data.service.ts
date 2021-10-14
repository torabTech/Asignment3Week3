import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Games } from './games-list/games-list.component'; 


@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private apiBaseUrl:string = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  public getGames():Promise<Games[]>{
    const url:string =this.apiBaseUrl+'/games';
    return this.http.get(url).toPromise()
    .then(response => response as Games[])
    .catch(this.handlError);
  }

  public getGame(id:any):Promise<any>{
    const url:string = this.apiBaseUrl+'/games/'+id;
    return this.http.get(url).toPromise()
    .then(response => response)
    .catch(this.handlError);
  }

  private handlError(error: any):Promise<any>{
    console.log('Oops! something wents wrong');
    return Promise.reject(error.message || error)
  }

}

