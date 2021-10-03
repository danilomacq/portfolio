import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from 'src/core/models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() animal?: Animal;
}
