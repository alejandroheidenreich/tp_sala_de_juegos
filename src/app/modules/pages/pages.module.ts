import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../utils/sidebar/sidebar.component';
import { BackgroundComponent } from '../utils/background/background.component';


@NgModule({
  declarations: [
    PagesComponent,SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
