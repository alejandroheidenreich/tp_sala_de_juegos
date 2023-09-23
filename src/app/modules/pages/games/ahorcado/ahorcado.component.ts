import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  title = "Ahorcado";
  public palabrasJuego: string[] = [
    "superfluo",
    "inefable",
    "inconmensurable",
    "etereo",
    "sempiterno",
    "petricor",
    "perenne",
    "luminiscencia",
    "mondo",
    "infinito",
    "ademan",
    "epoca",
    "bonhomia",
    "soledad",
    "resiliencia",
    "melancolia",
    "nefelibata",
    "melifluo",
    "elocuencia",
    "efervescencia",
    "ataraxia",
    "olvido",
    "iridiscencia",
    "limerencia",
    "ascendrado",
    "arrebol",
    "sonambulo",
    "serendipia",
    "alba",
    "epifania",
    "incandescencia",
    "nostalgia",
    "inmarcesible",
    "aurora",
    "desenlace"
    
]; 
  public botonesClickeados: { [letra: string]: boolean } = {}; 
  public palabra: string = this.palabrasJuego[Math.floor(Math.random() * this.palabrasJuego.length)];
  public palabraOculta: string  = "";
  public intentos: number = 0;
  public partida: boolean | undefined = undefined;
  public letras:string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  constructor() {
    this.palabraOculta = "_ ".repeat(this.palabra.length);
    console.log(this.palabra);
  }

  comprobar(letra:string) {
    if (!this.botonesClickeados[letra]) {
      this.existeLetra(letra);
      
      const palabraOcultaArreglo = this.palabraOculta.split(" ");
      for (let i = 0; i <= this.palabra.length; i++) {
        if (this.palabra[i] === letra) {
          palabraOcultaArreglo[i] = letra;
        }
      }
      this.palabraOculta = palabraOcultaArreglo.join(" ");
      this.botonesClickeados[letra] = true;
      this.verificaGanador();
    }
  }

  verificaGanador() {
    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join("");

    if (palabraEvaluar === this.palabra) {
      this.partida = true;
    }
    else if (this.intentos === 9) {
        this.partida = false;
    }
  }

  existeLetra(letra:string) {
    if (this.palabra.indexOf(letra) == -1) {
       this.intentos++;
    } 
  }

  reiniciar(){
    window.location.reload();
  }

}
