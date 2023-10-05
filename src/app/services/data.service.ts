import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Mensaje } from "../interfaces/mensaje.interface";
import firebase from "firebase/compat/app"
import { environment } from "src/env/env";
import { Observable } from "rxjs";


@Injectable()
export class DataService {
    constructor(private httpCliente: HttpClient) {
        firebase.initializeApp(environment);
    }

    actualizarChat(nuevosMensaje: Mensaje) {
        this.httpCliente.post('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json', nuevosMensaje)
    }

    obtenerChat(): Observable<any> {
        return this.httpCliente.get('https://tp-sala-juegos-b5e8a-default-rtdb.firebaseio.com/chat.json')
    }

}