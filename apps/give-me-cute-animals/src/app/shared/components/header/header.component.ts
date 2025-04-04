import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../../../core/models/animal.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  @Input() animal?: Animal;
  @Output() changeAnimalEmitter = new EventEmitter();

  changeAnimal() {
    this.changeAnimalEmitter.emit();
  }
}
