import { Component } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import firebase from "firebase/compat/app"


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  constructor(private dataService: DataService, private authService: AuthService) { }
  usuarioLogeado: any;
  public nuevoMensaje: Mensaje = {
    emisor: '',
    texto: '',
  };
  public mensajes: Mensaje[] = [];



  ngOnInit() {
    this.dataService.obtenerChat().subscribe(data => {
      console.log(data);
      this.mensajes = Object.values(data)
    });
    this.authService.getUserLogged().subscribe((user: any) => {
      this.usuarioLogeado = user;
    });
  }


  enviarMensaje() {
    if (this.nuevoMensaje.texto != '') {
      console.log(this.usuarioLogeado);
      this.nuevoMensaje.emisor = this.usuarioLogeado.email;

      let mensaje = {
        emisor: this.usuarioLogeado.email,
        texto: this.nuevoMensaje.texto,
      };

      this.mensajes.push(mensaje);
      this.dataService.actualizarChat(mensaje);
      this.nuevoMensaje.texto = '';
      setTimeout(() => {
        this.scrollToTheLastElementByClassName();
      }, 30);
    }
  }

  scrollToTheLastElementByClassName() {
    let element = document.getElementsByClassName('msj');
    let lastElement: any = element[element.length - 1];
    let toppos = lastElement.offsetTop;

    const contMsg = document.getElementById('contendedorMensajes');
    console.log(contMsg!.scrollTop);

    contMsg!.scrollTop = toppos;
  }

}
