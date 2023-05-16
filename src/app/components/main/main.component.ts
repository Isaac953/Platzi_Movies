import { Component, OnInit, } from '@angular/core';
import {
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  btnMinus = faMinus;
  btnplus = faPlus;

  buttonsMovie: any[] = [
    {
      minus: this.btnMinus,
      plus: this.btnplus,
    },
  ];

  movieItems: any[] = [
    {
      id: 0,
      title: 'Avengers',
      cover: './assets/img/avengers.jpg',
      sum: 0,
      limit: 20,
      buttons: this.buttonsMovie,
      available: 'Boletos disponibles',
    },
    {
      id: 1,
      title: 'Terminator 2',
      cover: './assets/img/terminator.jpg',
      sum: 0,
      limit: 10,
      buttons: this.buttonsMovie,
      available: 'Boletos disponibles',
    },
    {
      id: 2,
      title: 'Top Gun: Maverick',
      cover: './assets/img/top_gun.JPG',
      sum: 0,
      limit: 15,
      buttons: this.buttonsMovie,
      available: 'Boletos disponibles',
    },
    {
      id: 3,
      title: 'Spider-Man: 3',
      cover: './assets/img/spiderman_3.JPG',
      sum: 0,
      limit: 25,
      buttons: this.buttonsMovie,
      available: 'Boletos disponibles',
    },
  ];

  /* Start Function next move Slide */
  nextSlide = (nextValue: number,  id: any) => {
      this.movieItems[id].sum = this.movieItems[id].sum + nextValue;
      this.limitSum(id);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number,  id: any) => {
    this.movieItems[id].sum = this.movieItems[id].sum - backValue;
    this.limitSum(id);
  };
  /* End Function back move Slide*/

    /* Start Function limitSum */
    limitSum = (id: any) => {
      switch (true) {
        case  this.movieItems[id].sum >  this.movieItems[id].limit:
          this.movieItems[id].sum = this.movieItems[id].sum - 1;
          break;
        case this.movieItems[id].sum === 0 || this.movieItems[id].sum < 0:
          this.movieItems[id].sum = 0;
          break;
      }
    };
    /* End Function limitSum */

  constructor() { }

  ngOnInit() {
  }
}
