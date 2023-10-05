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
  isLoading = true;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.changeAnimal();
  }

  changeAnimal(): void {
    this.isLoading = true;

    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
          this.isLoading = false;
        })
        break;
      case 2:
        this.animalService.getRandomDog().subscribe((data:Animal) => {
          this.animal = data;
          this.isLoading = false;
        })
        break;
      case 3:
        this.animalService.getRandomFox().subscribe((data:Animal) => {
          this.animal = data;
          this.isLoading = false;
        })
        break;
      case 4:
        this.animalService.getRandomRaccoon().subscribe((data:Animal) => {
          this.animal = data;
          this.isLoading = false;
        })
        break;
      default:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
          this.isLoading = false;
        })
        break;
    }
  }
}
