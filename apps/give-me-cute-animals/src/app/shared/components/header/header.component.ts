import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Animal } from 'src/core/models/animal.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() animal?: Animal;
  @Output() changeAnimalEmitter = new EventEmitter();

  changeAnimal(){
    this.changeAnimalEmitter.emit();
  }
}
