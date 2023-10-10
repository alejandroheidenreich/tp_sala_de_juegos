import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { PreguntadosComponent } from './preguntados.component';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@NgModule({
  declarations: [PreguntadosComponent],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    FormsModule
  ],
  providers: [DataService]
})
export class PreguntadosModule { }
