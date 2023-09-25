import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
//Material Navbar
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//Material Inicio
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    //Declaramos Componentes NAVBAR y FOOTER
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule

    
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule
  
  ]
})
export class SharedModule { }
