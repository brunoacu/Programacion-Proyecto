import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuarioColection:AngularFirestoreCollection<Usuario>

  constructor(private database:AngularFirestore) { 

    this.usuarioColection=this.database.collection<Usuario>("usuario")
  }
  agregarUsuario(usuario:Usuario, id:string){
    return new Promise(async(resolve, reject)=>{
      try{
        usuario.uid=id;
        const resultado=await this.usuarioColection.doc(id).set(usuario)
        resolve(resultado)
      }catch(error){
        reject(error)
      }
    })
  }
}
