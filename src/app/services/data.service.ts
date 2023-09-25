import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mensaje } from "../interfaces/mensaje.interface";
import firebase from "firebase/compat/app"
import { environment } from "src/env/env";

@Injectable()
export class DataService {
    constructor(private httpCliente: HttpClient) {
        firebase.initializeApp(environment);
    }

    actualizarChat(nuevosMensaje: Mensaje) {
        this.httpCliente.post('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json', nuevosMensaje)
            .subscribe(data => { console.log(data); }, err => console.log(err));
    }

    obtenerChat() {

        return this.httpCliente.get('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json')
    }



}