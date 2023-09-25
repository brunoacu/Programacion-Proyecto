import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  usuario: Usuario = {
    uid: '',
    email: '',
    password: '',
    nombre:'',
    rol:'',
};
constructor(public servicioAut:AuthService, public firestore: FirestoreService, public router:Router){}
async iniciar(){
  const credenciales = {
    email: this.usuario.email,
    password: this.usuario.password,
  };
  const res= await this.servicioAut.iniciarSesion(credenciales.email,credenciales.password)
  .then(res=>{
    alert("Se a logeado con exito :D")
    this.router.navigate(["/inicio"]);
  })
  .catch(error=>{
    alert("SOS UN BLDO FLACO :/ +" +error)
  })
} 
async salir(){
  const res = await this.servicioAut.cerrarSesion().then(res=>{
    alert("Ha cerrado sesion con exito.");
    console.log(res);
    this.router.navigate(["/inicio"]);
  })
}

}
