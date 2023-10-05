import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Animal } from 'src/core/models/animal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() isLoading?: boolean;
  @Input() animal?: Animal;
  @Output() changeAnimalEmitter = new EventEmitter();

  changeAnimal(){
    this.changeAnimalEmitter.emit();
  }
}
