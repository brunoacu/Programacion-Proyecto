import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/products';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection:AngularFirestoreCollection<Productos>

  constructor(private database:AngularFirestore) {
    this.productosCollection=database.collection("productos")
   }
   crearProducto(productos:Productos){
    return new Promise(async(resolve,reject)=>{
      try{
        const id=this.database.createId();
        productos.idProducto=id;
        
        const resultado=await this.productosCollection.doc(id).set(productos);

        resolve(resultado)
      }
      catch(error){
        reject(error);
      }
    })
   }

   obtenerProducto(){
    return this.productosCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data)))
   }
}
