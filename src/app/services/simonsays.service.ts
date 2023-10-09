import { Injectable } from '@angular/core';
import { COLORS, START_COUNT } from '../models/constants'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimonsaysService {
  simon: string[] = [];
  player: string[] = [];
  count!: number;
  estado = new Subject<any>;

  constructor() {
    this.count = START_COUNT;
  }

  private get randomColor(): string {
    return COLORS[Math.floor(Math.random() * 4)];
  }

  nuevaSecuencia(increment: boolean = false): void {
    if (increment) this.count++;
    this.simon.push(this.randomColor);
    this.player = [];
  }

  generarSimonsays(): string[] {
    for (let i = 0; i < this.count; i++) {
      this.nuevaSecuencia();
    }
    this.setEstado();
    return this.simon;
  }

  reiniciarSimonsays(): string[] {
    this.count = START_COUNT;
    this.simon = [];
    return this.generarSimonsays();
  }

  intentoPlayer(intento: string) {
    this.player.push(intento);
    if (!this.compararSimonsays()) {
      this.player = [];
      this.reiniciarSimonsays();
    }

    this.setEstado();
  }

  compararSimonsays(): boolean {
    for (let i = 0; i < this.player.length; i++) {
      if (this.player[i] !== this.simon[i]) return false;
    }
    if (this.player.length === this.simon.length) {
      this.nuevaSecuencia(true);
      this.player = [];
    }
    return true;
  }

  setEstado() {
    this.estado.next({
      player: this.player,
      simon: this.simon,
      count: this.count
    });
  }
}
