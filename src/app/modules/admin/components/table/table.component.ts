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

  productoSeleccionado!: Productos; // ! -> toma valores vacíos

  modalVisibleProducto: boolean = false;

  // modalVisible: boolean = false;

  // eliminarVisible: boolean = false;

  // ENLAZA NUESTRO FORMULARIO
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
  });

  constructor(
    // llamamos servicio Crud
    public servicioCrud: CrudService
  ) {}

  ngOnInit(): void {
    /* llamamos función obtenerProducto y le enviamos los nuevos valores
    del formulario producto (se guardan en la colección) */
    this.servicioCrud.obtenerProducto().subscribe((producto) => {
      this.coleccionProductos = producto;
    });
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Productos = {
        idProducto: '', // único que guardamos vacío; lo creamos en el CRUD
        nombre: this.producto.value.nombre!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
      };

      // ENVIAMOS NUESTRO NUEVO PRODUCTO
      await this.servicioCrud
        .crearProducto(nuevoProducto)
        .then((producto) => {
          alert('Ha agregado un nuevo producto con éxito :)');
        })
        .catch((error) => {
          alert('Hubo un error al cargar el nuevo producto :( \n' + error);
        });
    }
  }
  mostrarEditar(productoSeleccionado: Productos) {
    this.productoSeleccionado = productoSeleccionado;

    // "seteamos" o enviamos los nuevos valores
    // el ID no se vuelve a enviar/ no se modifica
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      categoria: productoSeleccionado.categoria,
    });
  }
  editarProducto() {
    let datos: Productos = {
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      descripcion: this.producto.value.descripcion!,
      precio: this.producto.value.precio!,
      categoria: this.producto.value.categoria!,
    };
    this.servicioCrud
      .modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then((producto) => {
        alert('El producto fue modificado con éxito.');
      })
      .catch((error) => {
        alert('No se pudo modificar el producto :( \n' + error);
      });
  }
  borrarProducto() {
    this.servicioCrud
      .eliminarProducto(this.productoSeleccionado.idProducto)
      .then((respuesta) => {
        alert('Se elimino correctamente');
      })
      .catch((error) => {
        alert('No se pudo eliminar');
      });
  }
  mostrarBorrar(productoSeleccionado: Productos) {
    this.modalVisibleProducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }
}
