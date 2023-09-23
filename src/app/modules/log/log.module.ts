import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log.component';
import { BackgroundComponent } from '../utils/background/background.component';



@NgModule({
  declarations: [
    LogComponent,BackgroundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LogRoutingModule
  ],
  exports: []
})
export class LogModule { }
