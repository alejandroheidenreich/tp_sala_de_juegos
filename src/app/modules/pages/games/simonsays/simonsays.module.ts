import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimonsaysRoutingModule } from './simonsays-routing.module';
import { ButtonComponent } from './button/button.component';
import { SimonsaysComponent } from './simonsays.component';


@NgModule({
  declarations: [
    SimonsaysComponent, ButtonComponent
  ],
  imports: [
    CommonModule,
    SimonsaysRoutingModule,
  ]
})
export class SimonsaysModule { }
