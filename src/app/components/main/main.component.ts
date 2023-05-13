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

  movieItems: any[] = [
    {
      category: 'Mi lista',
      sum: 0,
      limit: 5,
    },
  ];

  /* Start Function next move Slide */
  nextSlide = (nextValue: number) => {
      this.movieItems[0].sum = this.movieItems[0].sum + nextValue;
      this.limitSum();
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number) => {
    this.movieItems[0].sum = this.movieItems[0].sum - backValue;
    this.limitSum();
  };
  /* End Function back move Slide*/

    /* Start Function limitSum */
    limitSum = () => {
      switch (true) {
        case  this.movieItems[0].sum >  this.movieItems[0].limit:
          this.movieItems[0].sum = this.movieItems[0].sum - 1;
          break;
        case this.movieItems[0].sum === 0 || this.movieItems[0].sum < 0:
          this.movieItems[0].sum = 0;
          break;
      }
    };
    /* End Function limitSum */

  constructor() { }

  ngOnInit() {
  }
}
