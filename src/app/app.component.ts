import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuarios.interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp_sala_juegos';
}

