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
  
  public accion: string = 'Sign In';
  public btnText: string = 'Login';
  public accionText: string = 'Sign Up';

  login():void{
    let {email, clave} = this.usuario;
    switch (this.accion) {
      case 'Sign In':
        this.authService.login(email, clave).then(res=> {
          console.log("Se logeo", res);
          if (res != null) {
            this.router.navigateByUrl("/home");
          }
        });
        
        break;
      case 'Sign Up':
        this.authService.register(email, clave).then(res=> {
          console.log("Se registro", res);
          
        });
        break;
    }
  }

  registrar():void{
    console.log("hola");
    switch (this.accion) {
      case 'Sign In':
        this.accion = "Sign Up";
        this.btnText = "Register";
        this.accionText = "Login";
        break;
      case 'Sign Up':
        this.accion = "Sign In";
        this.btnText = "Login";
        this.accionText = "Sign Up";
        break;
    }

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
