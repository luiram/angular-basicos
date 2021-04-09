// Importar decorador del componente
import { Component } from '@angular/core';

// Decorador
@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})

// Componente creado manualmente
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
  // metodo sumar
    acumular(valor: number){
        this.numero += valor
    }
}