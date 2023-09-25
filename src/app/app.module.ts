import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes Globales
import { SharedModule } from './shared/shared.module';
//firebase 
import { environmet } from 'src/environments/environmet';
import{AngularFireModule} from'@angular/fire/compat';//Importacion Firestore
import{AngularFireAuthModule}from'@angular/fire/compat/auth';//
import{AngularFireStorageModule} from'@angular/fire/compat/storage'//Importacion FIrestorge
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SharedModule,
    AngularFireModule.initializeApp(environmet.firebaseConfig),//Inicializa FIREBASE
    AngularFireAuthModule,
    AngularFireStorageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
