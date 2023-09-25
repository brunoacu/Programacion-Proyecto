import { Component } from '@angular/core';
import { Productos } from 'src/app/models/products';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  coleccionProductos: Productos[] = [];

  ProductoSeleccionado!: Productos; // Toma valores vacios

  modalVisibleProducto: boolean = false;

  //  modalVisible: boolean = false;

  //  eliminarVisible: boolean = false;

  producto = new FormGroup({
    
    //Docs
    titulo: new FormControl('', Validators.required),
    docs : new FormControl ('', Validators.required),
    descripcion : new FormControl ('', Validators.required),
    
    
    //Imagen
    /*
    imagen: new FormControl('', Validators.required),
    comentario: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    */
  })
  constructor(public servicioCrud:CrudService){}
 
  ngOnInit():void{
    this.servicioCrud.obtenerProducto().subscribe(producto=> {
      this.coleccionProductos= producto
    })
  }
  async agregaProducto(){
    if(this.Producto.)
  }
}
