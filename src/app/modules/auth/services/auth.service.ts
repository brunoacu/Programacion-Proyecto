import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public auth: AngularFireAuth) { }

  iniciarSesion(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }




  registrar(name: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(name, password);
}
async geTUid(){
  const user= await this.auth.currentUser;
  if(user == null){
    return null;
  }else{
    return user.uid;
  }
}
cerrarSesion(){
  //devuelve una promesa vacia
  return this.auth.signOut();
}
}
