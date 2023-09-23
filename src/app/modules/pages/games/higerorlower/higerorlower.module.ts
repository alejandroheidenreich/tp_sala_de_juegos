import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HigerorlowerRoutingModule } from './higerorlower-routing.module';
import { HigerorlowerComponent } from './higerorlower.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HigerorlowerComponent
  ],
  imports: [
    CommonModule,
    HigerorlowerRoutingModule,
    FormsModule
  ]
})
export class HigerorlowerModule { }
