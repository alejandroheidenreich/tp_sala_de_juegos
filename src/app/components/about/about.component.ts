import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    divMostrada: number = 0; // Valor inicial para no mostrar ninguna div

    mostrarDiv(numeroDiv: number) {
      this.divMostrada = numeroDiv;
    }
}
