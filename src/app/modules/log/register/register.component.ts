import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private authService: AuthService) { }
  public usuario: Usuario = {
    email: '',
    clave: ''
  };
  public claveConfirm: string = '';


  registrar(): void {

    if (this.usuario.clave != '' && this.usuario.clave === this.claveConfirm) {
      this.authService.register(this.usuario.email, this.usuario.clave).then(res => {
        console.log("Se registro", res);
        if (res == null) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario ya exsite',
            footer: 'Vuelva a intentarlo'
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado con exito',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.authService.login(this.usuario.email, this.usuario.clave).then(res => {
              if (res != null) {
                this.router.navigateByUrl('app');
              }
            })
          })
        }
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
        footer: 'Vuelva a intentarlo'
      })
    }


  }


}
