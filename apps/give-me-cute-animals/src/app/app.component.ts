import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Animal } from 'src/core/models/animal.model';
import { AnimalService } from 'src/core/services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal?: Animal;
  isLoading = true;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.changeAnimal();
  }

  changeAnimal(): void {
    this.isLoading = true;

    const animalFetchers = [
      () => this.animalService.getRandomCat(),
      () => this.animalService.getRandomDog(),
      () => this.animalService.getRandomFox(),
      () => this.animalService.getRandomPanda(),
    ];
    
    const randomNumber = Math.floor(Math.random() * animalFetchers.length);
    
    this.isLoading = true;

    animalFetchers[randomNumber]().subscribe(async (data: Animal) => {
      if (data.url) {
        try {
          await this.preloadImage(data.url);
          this.animal = data;
        } catch (error) {
          console.error('Image failed to load:', error);
          this.animal = { error: true };
        }
      } else {
        this.animal = { error: true };
      }
      this.isLoading = false;
    });
  }

  preloadImage(url: string): Observable<string> {
    return new Observable((observer) => {
      const img = new Image();
      img.src = url;
  
      img.onload = () => {
        observer.next(url);
        observer.complete();
      };
  
      img.onerror = (error) => {
        observer.error('Image failed to load');
      };
    });
  }
}
