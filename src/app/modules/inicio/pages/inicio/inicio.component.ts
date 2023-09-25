import { Component,OnInit } from '@angular/core';
//Impotamos Interfaz "INICIO"
import { Competicion } from 'src/app/models/competicion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info:Competicion[];
  constructor(){
    this.info=[
      {
      titulo:"butaca",
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_678532-MLA51635054299_092022-F.webp",
      precio:"$114.423",
      descripcion:"Butaca de fibra de vidrio ideal Competicion, rally. 1/4milla, pista. Color: Negro. Medidas:Ancho: 54cm Alto: 81cm Base: 49cm Ancho interno (entre pasa cinto inferior): 35.5cm. Peso:6700gr",
      alt:""

      },
      {
        titulo:"Árbol De Levas",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_945319-MLA53157452468_012023-F.webp",
        precio:"$97.738",
        descripcion:"ARBOL DE LEVA RNH - NUEVA - 0KM Alzada 12.80 mm APTO: Motor 1100- 1300- 1500 cc + Motor tipo 1.4 1.6 cc",
        alt:""
      },
      {
        titulo:"Selectora Rápida Rotulada",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_862101-MLA48013618551_102021-F.webp",
        precio:"$60.000",
        descripcion:"SELECTORA RAPIDA ROTULADA- Aplicacion: Fiat 128 / 147 -Uso para caja original cucharita únicamente ! ! ! # COMPETICION / 1/4 DE MILLA / CATEGORIAS ZONALES #",
        alt:""
      }
      ,
      {
        titulo:"Cable Bujia Ferrazzi Competicion",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_704834-MLA52178629731_102022-F.webp",
        precio:"$13.000",
        descripcion:"Cable Bujia Ferrazzi Competicion Fiat 147 1.4 Motor Tipo",
        alt:""
      }
      ,
      {
        titulo:"Reforma Trasera Regulable",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_600700-MLA47723202898_102021-F.webp",
        precio:"$16.000",
        descripcion:"Reforma Trasera Regulable Fiat Uno 147 128 Competicion Egs",
        alt:""
      },
      {
        titulo:"Turbo Gt1749v Fiat Stilo Ma",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_893253-MLA69617955486_052023-F.webp",
        precio:"$305.000",
        descripcion:"Turbo GT1749V Fiat Stilo Marea Alfa Romeo 147 156 1.9 JTD. Motor: 1.9 JTD 8v - M.724.19 X",
        alt:""
      }
      ,
      {
        titulo:"Neumatico Nankang Ar",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_660208-MLA52005921067_102022-F.webp",
        precio:"$190.000",
        descripcion:"Neumatico Nankang Ar-1 195/50/15 86v Semi Slick Track Day. NANKANG AR1 195/50/15 86V. Indice de Velocidad: V (max 240 km/h) .Diámetro Externo: 577 mm. Treadware: 80.Traction: AA. Temperature: A",
        alt:""
      }
      ,
      {
        titulo:"Ferrari F1 412 1995 Motor V12 Cuadro Enmarcado",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_795537-MLA52071138445_102022-F.webp",
        precio:"$21.999",
        descripcion:"Ferrari F1 412 1995 Motor V12",
        alt:""
      }
      ,
      {
        titulo:"Fiat 147 Armado de Calle - ¼ de Milla",
        img:"https://scontent.fmdq7-1.fna.fbcdn.net/v/t1.18169-9/13083272_1142539999132030_7383849898965532976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=UNr4-rLToJ0AX8M3kBb&_nc_ht=scontent.fmdq7-1.fna&oh=00_AfCcLyNu1Etdei9B8DcyMoO1adtYm_2TGyZPaQxuHKyb4A&oe=64F9C2CA",
        precio:"No existe",
        descripcion:"Fiat 147 Armado de Calle - ¼ de Milla | Motor 8v Turbo con Inyección FuelTech FT400 | BoostController2 | KnockMeter | Mejor Registro 11.78s con 0.11rt en 402mts ",
        alt:""
      }
    ]
  }
  //Evento 
  ngOnInit():void{}
}
