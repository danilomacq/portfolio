import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {

  apiUrl: string = 'https://aws.random.cat/';

 constructor(private http: HttpClient) { }

  getRandomCat(): Observable<Animal> {
    return this.http.get(this.apiUrl + 'meow')
  }

}