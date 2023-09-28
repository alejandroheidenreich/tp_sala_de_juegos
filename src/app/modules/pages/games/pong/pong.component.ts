import { Component, ViewChild } from '@angular/core';
import { MesaComponent } from './mesa/mesa.component';

@Component({
  selector: 'app-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.css']
})
export class PongComponent {
  @ViewChild(MesaComponent) mesaComponent!: MesaComponent;
}
