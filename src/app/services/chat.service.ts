import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, getDoc, getDocs, query, where, onSnapshot } from "@angular/fire/firestore";
import { Mensaje } from "../interfaces/mensaje.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private firestore: Firestore) { }

  agregarChat(nuevosMensaje: Mensaje): Promise<any> {
    const col = collection(this.firestore, 'chat');
    return addDoc(col, nuevosMensaje);
  }

  async inicializarChat() {
    const col = collection(this.firestore, 'chat');

  }

  async obtenerChat1() {
    // const col = collection(this.firestore, 'chat');
    // const data = collectionData(col);

    // return data
    //----------------------------------------------------------------
    const col = collection(this.firestore, 'chat');
    const obs = collectionData(col);
    obs.subscribe(data => {
      console.log("aca");

      console.log(data);
      console.log("aca");

    })
    return obs;
    //----------------------------------------------------------------

    // const docRef = doc(this.firestore, "chat");
    // const docSnap = await getDoc(docRef).then((docSnap) => {

    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // });

    //----------------------------------------------------------------
    // const mensajes: Mensaje[] = [];
    // const querySnapshot = await getDocs(collection(this.firestore, "chat"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   mensajes.push({ "emisor": doc.data()['emisor'], "fecha": doc.data()['fecha'], "texto": doc.data()['texto'] });
    //   console.log(doc.id, " => ", doc.data());
    // });
    // return mensajes;
    //----------------------------------------------------------------

    let mensajes: Mensaje[] = [];
    const q = query(collection(this.firestore, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //mensajes = [];
        mensajes.push({ "emisor": doc.data()['emisor'], "fecha": doc.data()['fecha'], "texto": doc.data()['texto'] });
      });
      mensajes.sort(this.compararPorFecha);
      console.log(mensajes);

    });
    return mensajes;
    //return [];
  }

  obtenerChat2(): Observable<Mensaje[]> {
    const col = collection(this.firestore, 'chat');
    return collectionData(col) as Observable<Mensaje[]>;
  }

  obtenerChat(mensajes: Mensaje[]) {
    const q = query(collection(this.firestore, "chat"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          mensajes.push({ "emisor": change.doc.data()['emisor'], "fecha": change.doc.data()['fecha'], "texto": change.doc.data()['texto'] });
          mensajes.sort(this.compararPorFecha);
        }
      });
    });

    return unsubscribe;
  }

  compararPorFecha(a: Mensaje, b: Mensaje): number {
    const fechaA = new Date(a.fecha.split(' - ')[1] + ' ' + a.fecha.split(' - ')[0]);
    const fechaB = new Date(b.fecha.split(' - ')[1] + ' ' + b.fecha.split(' - ')[0]);
    let cmp = 0;
    if (fechaA < fechaB) { cmp = -1; }
    else if (fechaA > fechaB) { cmp = 1; }
    return cmp;
  }
}
