import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService) { }
  // public vista: string = 'home';
  public visible: string = 'home';
  public usuario: string | null | undefined | void = this.obtenerUsuarioLogeado();

  mostrar(selector: string): void {
    this.visible = selector;
  }

  obtenerUsuarioLogeado() {
    this.authService.getUserLogged().subscribe(res => {
      console.log(res);

      this.usuario = res?.email;
    })
  }
}
