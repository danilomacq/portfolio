import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {

 constructor(private http: HttpClient) { }

  getRandomCat(): Observable<Animal> {
    return this.http.get('https://api.thecatapi.com/v1/images/search').pipe(
      map((response: any) => {
        let cat: Animal;
        if(response && response[0].url){
          cat = { url: response[0].url };
        }else{
          cat = { error: true };
        }
        return cat;
      })
    );
  }

  getRandomDog(): Observable<Animal> {
    return this.http.get('https://dog.ceo/api/breeds/image/random').pipe(
      map((response: any) => {
        let dog: Animal;
        if(response && response.message){
          dog = { url: response.message };
        }else{
          dog = { error: true };
        }
        return dog;
      })
    );
  }

  getRandomFox(): Observable<Animal> {
    return this.http.get('https://randomfox.ca/floof').pipe(
      map((response: any) => {
        let fox: Animal;
        if(response && response.image){
          fox = { url: response.image };
        }else{
          fox = { error: true };
        }
        return fox;
      })
    );
  }

  getRandomRaccoon(): Observable<Animal> {
    return this.http.get('https://some-random-api.com/animal/raccoon').pipe(
      map((response: any) => {
        let raccoon: Animal;
        if(response && response.image){
          raccoon = { url: response.image };
        }else{
          raccoon = { error: true };
        }
        return raccoon;
      })
    );
  }
}