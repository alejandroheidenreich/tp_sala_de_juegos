import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PongRoutingModule } from './pong-routing.module';
import { PongComponent } from './pong.component';
import { MesaComponent } from './mesa/mesa.component';


@NgModule({
  declarations: [
    PongComponent,
    MesaComponent
  ],
  imports: [
    CommonModule,
    PongRoutingModule
  ]
})
export class PongModule { }
