import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {

 constructor(private http: HttpClient) { }

  private fetchAnimal(url: string, imageKey: string): Observable<Animal> {
    return this.http.get(url).pipe(
      map((response: any) => {
        // If the response is an array, use the first element
        const data = Array.isArray(response) ? response[0] : response;
        // Extract the nested property based on the imageKey
        const imageUrl = this.getNestedValue(data, imageKey);
        return imageUrl ? { url: imageUrl } : { error: true };
      }),
      catchError(() => of({ error: true })) // Handle HTTP errors
    );
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  getRandomCat(): Observable<Animal> {
    return this.fetchAnimal('https://api.thecatapi.com/v1/images/search', 'url');
  }

  getRandomDog(): Observable<Animal> {
    return this.fetchAnimal('https://dog.ceo/api/breeds/image/random', 'message');
  }

  getRandomFox(): Observable<Animal> {
    return this.fetchAnimal('https://randomfox.ca/floof', 'image');
  }

  getRandomPanda(): Observable<Animal> {
    return this.fetchAnimal('https://some-random-api.com/animal/panda', 'image');
  }
}