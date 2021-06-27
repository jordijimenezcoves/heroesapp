import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {

    // Leer parámetros de la ruta con ActivatedRoute
    this.activatedRoute.params
    // Llamada al método pipe para encadenar operadores
    .pipe(
      // Operador que reemplaza el flujo actual de datos por el de un nuevo Observable (al que se suscribe internamente)
      switchMap(params => this.heroesService.getHeroePorId(params.id))
    )
    .subscribe( heroe => {
      this.heroe = heroe;  
    });
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
