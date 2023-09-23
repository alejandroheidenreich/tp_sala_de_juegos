import { Component, Output } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-higerorlower',
  templateUrl: './higerorlower.component.html',
  styleUrls: ['./higerorlower.component.css'],

})
export class HigerorlowerComponent {
  public cartas: string[] = [
    "assets/cards/2_of_clubs.svg",
    "assets/cards/2_of_diamonds.svg",
    "assets/cards/2_of_hearts.svg",
    "assets/cards/2_of_spades.svg",
    "assets/cards/3_of_clubs.svg",
    "assets/cards/3_of_diamonds.svg",
    "assets/cards/3_of_hearts.svg",
    "assets/cards/3_of_spades.svg",
    "assets/cards/4_of_clubs.svg",
    "assets/cards/4_of_diamonds.svg",
    "assets/cards/4_of_hearts.svg",
    "assets/cards/4_of_spades.svg",
    "assets/cards/5_of_clubs.svg",
    "assets/cards/5_of_diamonds.svg",
    "assets/cards/5_of_hearts.svg",
    "assets/cards/5_of_spades.svg",
    "assets/cards/6_of_clubs.svg",
    "assets/cards/6_of_diamonds.svg",
    "assets/cards/6_of_hearts.svg",
    "assets/cards/6_of_spades.svg",
    "assets/cards/7_of_clubs.svg",
    "assets/cards/7_of_diamonds.svg",
    "assets/cards/7_of_hearts.svg",
    "assets/cards/7_of_spades.svg",
    "assets/cards/8_of_clubs.svg",
    "assets/cards/8_of_diamonds.svg",
    "assets/cards/8_of_hearts.svg",
    "assets/cards/8_of_spades.svg",
    "assets/cards/9_of_clubs.svg",
    "assets/cards/9_of_diamonds.svg",
    "assets/cards/9_of_hearts.svg",
    "assets/cards/9_of_spades.svg",
    "assets/cards/10_of_clubs.svg",
    "assets/cards/10_of_diamonds.svg",
    "assets/cards/10_of_hearts.svg",
    "assets/cards/10_of_spades.svg",
    "assets/cards/jack_of_clubs.svg",
    "assets/cards/jack_of_diamonds.svg",
    "assets/cards/jack_of_hearts.svg",
    "assets/cards/jack_of_spades.svg",
    "assets/cards/queen_of_clubs.svg",
    "assets/cards/queen_of_diamonds.svg",
    "assets/cards/queen_of_hearts.svg",
    "assets/cards/queen_of_spades.svg",
    "assets/cards/king_of_clubs.svg",
    "assets/cards/king_of_diamonds.svg",
    "assets/cards/king_of_hearts.svg",
    "assets/cards/king_of_spades.svg",
    "assets/cards/ace_of_clubs.svg",
    "assets/cards/ace_of_diamonds.svg",
    "assets/cards/ace_of_hearts.svg",
    "assets/cards/ace_of_spades.svg",
  ];
  @Output()
  public cartaActual: string = "";
  public cartaAnterior: string = "";

  public seleccion: boolean = false;
  public puntos: number = 0;
  public isCollapsed = false;
  constructor(){
    this.nuevaCarta();
  }

  jugar(select: boolean){
    this.seleccion = select;
    this.cartaAnterior = this.cartaActual;
    let indexAnterior = this.cartas.indexOf(this.cartaAnterior);
    this.nuevaCarta();
    let indexNueva = this.cartas.indexOf(this.cartaActual);
    
    if ((this.seleccion && indexNueva > indexAnterior || !this.seleccion && indexNueva < indexAnterior) && this.cartas[indexAnterior][13] !=  this.cartas[indexNueva][13]){
      //gano
      // Swal.fire('Ganaste');
      Swal.fire({
        title: 'Ganaste',
        // width: 600,
        // padding: '3em',
        color: '#000000',
        confirmButtonColor: '#0f0',
        confirmButtonText: 'Continue',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(133, 216, 118,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      this.puntos++;
    } else { 
      //perdio
      Swal.fire({
        title: 'Perdiste',
        confirmButtonColor: '#E33939',
        // width: 600,
        // padding: '3em',
        color: '#000000',
        confirmButtonText: 'Retry',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(216, 118, 118,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      })
    }
  }

 
  nuevaCarta(){
    this.cartaActual = this.cartas[Math.floor(Math.random() * this.cartas.length)];
  }
}
