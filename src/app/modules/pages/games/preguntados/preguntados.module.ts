import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './preguntados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PreguntadosComponent],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    FormsModule
  ]
})
export class PreguntadosModule { }
