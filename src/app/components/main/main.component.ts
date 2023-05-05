import { Component } from '@angular/core';
import {
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  btnMinus = faMinus;
  btnplus = faPlus;
}
