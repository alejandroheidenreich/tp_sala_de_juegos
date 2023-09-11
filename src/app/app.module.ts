import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/env/env';
import { ChatComponent } from './components/chat/chat.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { MayoromenorComponent } from './components/mayoromenor/mayoromenor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    SidebarComponent,
    AboutComponent,
    ChatComponent,
    AhorcadoComponent,
    MayoromenorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
