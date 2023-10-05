import { Component } from '@angular/core';

import { Animal } from 'src/core/models/animal.model';
import { AnimalService } from 'src/core/services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal?: Animal;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.changeAnimal();
  }

  changeAnimal(): void {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
        })
        break;
      case 2:
        this.animalService.getRandomDog().subscribe((data:Animal) => {
          this.animal = data;
        })
        break;
      case 3:
        this.animalService.getRandomFox().subscribe((data:Animal) => {
          this.animal = data;
        })
        break;
      default:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
        })
        break;
    }
  }
}
