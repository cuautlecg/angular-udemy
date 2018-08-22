import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Hubo un error en el obs' , error),
      () => console.log('El observador termino correctamente')
    );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina está a punto de cerrarse');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<number> {
    return new Observable( observer => {
      let contador = 0;

      let intervalo = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter( ( valor, index) => {
        if ( (valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
