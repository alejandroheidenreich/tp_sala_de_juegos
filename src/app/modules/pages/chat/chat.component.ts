import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  constructor(private chatService: ChatService, private authService: AuthService) { }

  usuarioLogeado: any;
  public nuevoMensaje: Mensaje = {
    emisor: '',
    fecha: '',
    texto: '',
  };
  public mensajes: Mensaje[] = [];
  public sub!: any;

  ngOnInit() {
    this.authService.getUserLogged().subscribe(user => {
      this.usuarioLogeado = user;
    });
    this.sub = this.chatService.obtenerChat(this.mensajes);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }


  async enviarMensaje() {
    if (this.nuevoMensaje.texto != '') {
      this.nuevoMensaje.emisor = this.usuarioLogeado.email;
      let mensaje = {
        emisor: this.usuarioLogeado.email,
        texto: this.nuevoMensaje.texto,
        fecha: new Date().toTimeString() + " - " + new Date().toDateString()
      };
      try {
        await this.chatService.agregarChat(mensaje).then((chat) => {
          this.nuevoMensaje.texto = '';
          setTimeout(() => {
            this.scrollToTheLastElementByClassName();
          }, 30);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  scrollToTheLastElementByClassName() {

    let element = document.getElementsByClassName('msj');
    if (element.length > 0) {

      let lastElement: any = element[element.length - 1];
      let toppos = lastElement.offsetTop;

      const contMsg = document.getElementById('contendedorMensajes');
      console.log(contMsg!.scrollTop);

      contMsg!.scrollTop = toppos;
    }
  }

}
