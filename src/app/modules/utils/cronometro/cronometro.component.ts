import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  @Output()
  public segundos: number = 60;

  constructor(){
    setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.segundos < 0) {
      this.reinciar();
    }
  }

 reinciar(): void {
  this.segundos = 60;
 }
}
