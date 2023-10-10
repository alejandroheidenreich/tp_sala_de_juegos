import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/pregunta.inteface';
import { DataService } from 'src/app/services/data.service';
import trivia from 'src/assets/trivia.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  public contadorCorrectas: number = 0;
  public estado: boolean | undefined;
  public segundos: number = 0;
  public interval!: any;
  public opciones: string[] = [];
  public categoria: string | undefined;
  public pregunta: string | undefined;
  public preguntaElegida!: Pregunta;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => this.tick(), 1000);
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
      text: 'La respuesta correta era: ' + this.preguntaElegida.results[0].correct_answer,
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
    if (opcion == this.preguntaElegida.results[0].correct_answer) {
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
        text: 'La respuesta correcta era: ' + this.preguntaElegida.results[0].correct_answer,
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
    this.data.obtenerPregunta().subscribe(pregunta => {
      this.preguntaElegida = pregunta;
      console.log(pregunta);
      this.categoria = this.preguntaElegida.results[0].category;
      this.pregunta = this.preguntaElegida.results[0].question;
      this.opciones = this.preguntaElegida.results[0].incorrect_answers;
      this.opciones.push(this.preguntaElegida.results[0].correct_answer)
      this.shuffleArray(this.opciones);
      console.log(this.preguntaElegida.results[0].correct_answer);
    });
  }

  shuffleArray(array: any) {
    array.sort(() => { return Math.random() - 0.5; });
  }


}
