import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
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
  public palabraOculta: string = "";
  public intentos: number = 0;
  public partida: boolean | undefined = undefined;
  public letras: string[] = [
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

  constructor() { }

  ngOnInit(): void {
    this.palabraOculta = "_ ".repeat(this.palabra.length);
    console.log(this.palabra);
  }

  comprobar(letra: string) {
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
      Swal.fire({
        title: 'Ganaste',
        // width: 600,
        // padding: '3em',
        color: '#000000',
        confirmButtonColor: '#0f0',
        confirmButtonText: 'Continue',
        background: '#fff',
        backdrop: `
          rgba(133, 216, 118,0.4)
          left top
          no-repeat
        `
      })
    }
    else if (this.intentos === 9) {
      this.partida = false;
      Swal.fire({
        title: 'Perdiste',
        confirmButtonColor: '#E33939',
        width: 600,
        padding: '3em',
        color: '#000000',
        confirmButtonText: 'Retry',
        text: 'La palabra era: ' + this.palabra,
        background: '#fff',
        backdrop: `
        rgba(216, 118, 118,0.4)
        left top
        no-repeat
      `
      })
    }
  }

  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) == -1) {
      this.intentos++;
    }
  }

  reiniciar() {
    window.location.reload();
  }

}
