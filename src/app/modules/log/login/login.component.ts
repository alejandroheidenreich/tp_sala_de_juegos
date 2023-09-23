import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { AuthService } from 'src/app/services/auth.service';

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
  

  login():void{
    let {email, clave} = this.usuario;
    this.authService.login(email, clave).then(res=> {
      this.router.navigateByUrl('app');
      console.log("Se logeo", res);
      if (res != null) {
      }
    })
  }

  registrar():void{
    console.log("hola");
    this.router.navigateByUrl("/register");
  }

  autolog(){
    this.usuario.email = "test@gmail.com";
    this.usuario.clave = "123123";
    // this.authService.login("test@gmail.com", "123123").then(res=> {
    //   console.log("Se logeo", res);
    //   if (res != null) {
    //     this.router.navigateByUrl("/home");
    //   }
    // });
  }
  
}
