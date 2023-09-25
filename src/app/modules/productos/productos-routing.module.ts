import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CompeticionComponent } from './pages/competicion/competicion.component';
import { RepuestoComponent } from './pages/repuesto/repuesto.component';
import { CosmeticoComponent } from './pages/cosmetico/cosmetico.component';
const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"competicion",component:CompeticionComponent
  },
  {
    path:"cosmetico",component:CosmeticoComponent
  },
  {
    path:"repuesto",component:RepuestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
