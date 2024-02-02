import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  _tagsHistory: string[] = [];

  private apiKey: string = 'GkoC9axconrefhJcRoXDUI02TwIlQyi9';

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizarTags(tag: string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag)=> oldTag !==tag )
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0,10);

  }

  searchTag(tag:string){
    if(tag.length === 0) return; 
    this.organizarTags(tag);
    fetch('http://api.giphy.com/v1/gifs/search?api_key=dGMJW12nlHSz4603sy81BZFryoPshmUk&q=valorant$lomit=10')
      .then( resp => resp.json())
      .then()   
  }
}
