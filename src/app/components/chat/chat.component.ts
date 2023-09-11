import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  constructor(private authService: AuthService){}
  usuarioLogeado: any;
  public nuevoMensaje: string = '';
  mensajes: any = [
    {
    emisor:'DBg5LK0Ef7g5hteh7RSyJhNmESA2',
    texto: 'buenas'
    },
    {
    emisor:'C0qjVv9RvUbCBTTLbof4XoFX57P2',
    texto: 'hola que tal'
    },
    {
    emisor:'DBg5LK0Ef7g5hteh7RSyJhNmESA2',
    texto: 'todo bien, y vos?'
    },
    {
    emisor:'C0qjVv9RvUbCBTTLbof4XoFX57P2',
    texto: 'Perfecto'
    },
    {
    emisor:'DBg5LK0Ef7g5hteh7RSyJhNmESA2',
    texto: 'Hola gente !!!'
    },
    {
    emisor:'DBg5LK0Ef7g5hteh7RSyJhNmESA2',
    texto: 'que onda'
    },

  ];
  

  ngOnInit(){
    this.authService.getUserLogged().subscribe(user =>{
      this.usuarioLogeado = user;
    });
  }

  enviarMensaje(){
    if(this.nuevoMensaje != ''){
      console.log(this.usuarioLogeado);
      const nuevoChat = {
        emisor: this.usuarioLogeado.uid,
        texto: this.nuevoMensaje
      }
      this.mensajes.push(nuevoChat);
      // this.authService.actualizarChat(nuevoChat);
      this.nuevoMensaje = '';
      setTimeout(() => {
        this.scrollToTheLastElementByClassName();
      }, 30);
    }
  }

  scrollToTheLastElementByClassName(){
    let element = document.getElementsByClassName('msj');
    let lastElement: any = element[element.length-1];
    let toppos = lastElement.offsetTop;

    const contMsg = document.getElementById('contendedorMensajes');
    console.log(contMsg!.scrollTop);
    
    contMsg!.scrollTop = toppos;
  }

}
