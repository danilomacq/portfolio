import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalService } from 'src/core/services/animal.service';

import { Animal } from 'src/core/models/animal.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() animal?: Animal;
  @Output() animalChange = new EventEmitter<Animal>();

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(): void {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
          this.animalChange.emit(this.animal);
        })
        break;
      case 2:
        this.animalService.getRandomDog().subscribe((data:Animal) => {
          this.animal = data;
          this.animalChange.emit(this.animal);
        })
        break;
      case 3:
        this.animalService.getRandomFox().subscribe((data:Animal) => {
          this.animal = data;
          this.animalChange.emit(this.animal);
        })
        break;
      default:
        this.animalService.getRandomCat().subscribe((data:Animal) => {
          this.animal = data;
          this.animalChange.emit(this.animal);
        })
        break;
    }
  }

}
