import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mensaje } from "../interfaces/mensaje.interface";

@Injectable()
export class DataService {
    constructor(private httpCliente: HttpClient) { }

    actualizarChat(nuevosMensaje: Mensaje) {
        this.httpCliente.post('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json', nuevosMensaje)
            .subscribe(data => { console.log(data); }, err => console.log(err));
    }

    obtenerChat() {
        return this.httpCliente.get('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json')
    }
}