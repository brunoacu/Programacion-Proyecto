import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { RepuestoComponent } from './pages/repuesto/repuesto.component';
import { CosmeticoComponent } from './pages/cosmetico/cosmetico.component';
import { CompeticionComponent } from './pages/competicion/competicion.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    RepuestoComponent,
    CosmeticoComponent,
    CompeticionComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
