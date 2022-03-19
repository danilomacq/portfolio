import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {

 constructor(private http: HttpClient) { }

  getRandomCat(): Observable<Animal> {
    return this.http.get('https://aws.random.cat/meow')
  }

  getRandomDog(): Observable<Animal> {
    return this.http.get('https://dog.ceo/api/breeds/image/random')
  }

  getRandomFox(): Observable<Animal> {
    return this.http.get('https://randomfox.ca/floof')
  }

}