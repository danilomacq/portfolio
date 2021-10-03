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
    this.animalService.getRandomCat().subscribe((data:Animal) => {
      this.animal = data;
      this.animalChange.emit(this.animal);
    })
  }

}
