import { Component, Input } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class HeroeTarjetaComponent {

  // @Input() heroe: Heroe = {
  //   id:               '',
  //   superhero:        '',
  //   publisher:        Publisher.DCComics,
  //   alter_ego:        '',
  //   first_appearance: '',
  //   alt_img:          '',
  //   characters:       ''
  // };

  // Alternativa incialización #1
  @Input() heroe!: Heroe;
   
  // Alternativa incialización #2
  // @Input() heroe: Heroe | undefined;
}
