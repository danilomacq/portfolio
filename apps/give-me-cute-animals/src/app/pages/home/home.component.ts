import { Component, Input } from '@angular/core';

import { Animal } from 'src/core/models/animal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() animal?: Animal;

  constructor() { }
  
}
