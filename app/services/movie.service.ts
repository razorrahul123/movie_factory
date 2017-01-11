import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apikey:string;
  constructor(private _jsonp:Jsonp){
    this.apikey= '3ec7ef7dc69f3f342504288550afc06e';
    console.log('MovieService Intialized...');
  }

  getPopular(){
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-01-20&primary_release_date.lte=2016-01-27&api_key='+this.apikey)
      .map(res => res.json());
  }
}
