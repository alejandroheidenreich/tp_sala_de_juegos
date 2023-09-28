import { Component, OnInit, OnDestroy } from '@angular/core';
import trivia from 'src/assets/trivia.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  public contadorCorrectas: number = 0;
  public pregunta: string = '';
  public categoria: string = '';
  public dificultad: string = '';
  public correcta: string = '';
  public estado: boolean | undefined;
  public opciones: string[] = [];
  public preguntasArray: any[] = [];
  public segundos: number = 0;
  public interval!: any;

  constructor() { }

  ngOnInit(): void {
    // declarar interval destroy -- clear
    this.interval = setInterval(() => this.tick(), 1000);
    this.preguntasArray = trivia.preguntas;
    this.iniciar();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  iniciar() {
    this.estado = true;
    this.elegirAleatoria();
    this.contadorCorrectas = 0;
    this.segundos = 30;
  }

  private tick(): void {
    if (this.estado) {
      if (this.segundos == 0) {
        this.estado = false;
        this.reinciarSegundos();
      } else {
        --this.segundos
      }
    }
  }

  reinciarSegundos(): void {
    Swal.fire({
      title: 'Perdiste, se termino el tiempo',
      text: 'La respuesta correta era: ' + this.correcta,
      confirmButtonColor: '#E33939',
      color: '#000000',
      confirmButtonText: 'Retry',
      background: '#fff',
      backdrop: `
        rgba(216, 118, 118,0.4)
        left top
        no-repeat
      `
    }).then(() => { this.iniciar(); })

  }

  siguiente(): void {
    this.estado = true;
    this.segundos = 30;
    this.elegirAleatoria();


  }

  comprobar(opcion: string): void {
    this.estado = false;
    if (opcion == this.correcta) {
      this.contadorCorrectas++;
      if (this.contadorCorrectas == 50) {
        Swal.fire({
          title: 'Ganaste',
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
      else {
        this.siguiente();
      }
    } else {
      this.contadorCorrectas = 0;
      Swal.fire({
        title: 'Perdiste',
        text: 'La respuesta correcta era: ' + this.correcta,
        confirmButtonColor: '#E33939',
        color: '#000000',
        confirmButtonText: 'Retry',
        background: '#fff',
        backdrop: `
        rgba(216, 118, 118,0.4)
        left top
        no-repeat
      `
      }).then(() => { this.iniciar(); });
    }
  }


  elegirAleatoria() {

    let index = Math.floor(Math.random() * this.preguntasArray.length);
    let elegida = this.preguntasArray[index];

    this.categoria = elegida["category"];
    this.dificultad = elegida["difficulty"];
    this.pregunta = elegida["question"];
    this.opciones = elegida["incorrect_answers"];
    this.correcta = elegida["correct_answer"];
    if (!this.opciones.includes(this.correcta)) {
      this.opciones.push(elegida["correct_answer"])
    }
    this.shuffleArray(this.opciones);
    console.log(this.correcta);
    this.preguntasArray.splice(index, 1);
  }


  shuffleArray(array: any) {
    array.sort(this.compareRandom);
  }

  compareRandom() {
    return Math.random() - 0.5;
  }

}
