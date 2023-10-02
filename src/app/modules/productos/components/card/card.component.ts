import { Component } from '@angular/core';
import { Productos } from 'src/app/models/products';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  coleccionProductos: Productos[] = [];
  productoSelecionado!: Productos; //toma valores vacios
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) {} //patenta nuestro servicio
  ngOnit(): void {
    this.servicioCrud.obtenerProducto().subscribe((productos) => {
      this.coleccionProductos = productos; //
    });
  }
  //SOLO VISUALIZA LA INFORMACION DEL PRODUCTO
  mostrarVer(info: Productos) {
    this.modalVisible = true;
    //INFO GUARDA LA INFORMACION SELECIONADA DE PRODUCTSELECIONADO
    this.productoSelecionado = info;
  }
}
