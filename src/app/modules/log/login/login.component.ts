import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }
  public usuario: Usuario = {
    email: '',
    clave: ''
  };


  login(): void {
    let { email, clave } = this.usuario;
    this.authService.login(email, clave).then(res => {
      if (res != null) {
        localStorage.setItem('token', res.user!.uid);
        this.router.navigateByUrl('app');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario/contraseña incorrectos',
          footer: 'Vuelva a intentarlo'
        })
      }
    })
  }

  registrar(): void {
    this.router.navigateByUrl("/register");
  }

  autolog() {
    this.usuario.email = "test@gmail.com";
    this.usuario.clave = "123123";
  }

}
