import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pregunta } from "../interfaces/pregunta.inteface";



@Injectable()
export class DataService {
    constructor(private httpCliente: HttpClient) { }

    obtenerPregunta(): Observable<Pregunta> {
        return this.httpCliente.get('https://opentdb.com/api.php?amount=1') as Observable<Pregunta>;

    }

}