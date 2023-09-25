import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  usuario: Usuario = {
    uid: '',
    email: '',
    password: '',
    nombre:'',
    rol:'',
};
uid="";
coleccionUsuario:Usuario[]=[];
constructor(public servicioAut:AuthService, public firestore: FirestoreService, public router:Router){}
async registrarse() {
  const credenciales = {
    email: this.usuario.email,
    password: this.usuario.password,
  };

  const res = await this.servicioAut
    .registrar(credenciales.email, credenciales.password).then(res=>{
      alert("Ha agregado un nuevo usuario con exito")
      this.router.navigate(["/inicio"]);
    })
    .catch((error) =>alert("hubo un error al cargar el usuario:(\n"+error) 

    );
    const uid =await this.servicioAut.geTUid();
    this.usuario.uid=uid;
  console.log(res);
}
async guardarUser(){
  this.firestore.agregarUsuario(this.usuario, this.usuario.uid)
  .then(res=>{
    console.log(this.usuario)
  })
  .catch(error=>{
    console.log("Error=>",error)
  })
}
  async ngOnInit(){
    const uid=await this.servicioAut.geTUid();
    console.log(uid)
  }
}
