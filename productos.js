class Productos {
    listaProductos = [];
    idNuevoProducto = 0;
    
nuevoProducto(producto) {
      this.listaProductos.push({
        id: ++this.idNuevoProducto,
        title: producto.title,
        price: producto.price,
        thumbnail: producto.thumbnail,
      });
      return this.listaProductos[this.id - 1];
    }
    // Valida productos en array
    leerProductos() {
      if (this.listaProductos.length <= 0) {
        return { error: "Aun no existe ningun producto" };
      } else {
        return this.listaProductos;
      }
    }
    leerProductosConId(id) {
      if (this.listaProductos[id - 1] == undefined) {
        return { error: "Ese producto no existe aun" };
      } else {
        return this.listaProductos[id - 1];
      }
    }
    // ------------- Actualiza producto manteniendo el ID --------------
    actualizarConID(id, productoNuevo) {
      let idParsed = parseInt(id);
      let productoAModificar = this.listaProductos.find((obj) => {
        return obj.id == idParsed;
      });
      if (productoAModificar == undefined) {
        return { error: "No existe el producto que desea actualizar" };
      } else {
        productoAModificar.title = productoNuevo.title;
        productoAModificar.price = productoNuevo.price;
        productoAModificar.thumbnail = productoNuevo.thumbnail;
        return productoAModificar;
      }
    }
    // ------------- Elimina un producto --------------
    borrarConID(id) {
      let idParsed = parseInt(id);  
      let productoABorrar = this.listaProductos.find((obj, idx) => {
        if (obj.id == idParsed) {
          this.listaProductos.splice(idx, 1);
          return obj;
        }
      });
  
      if (productoABorrar == []) {
        return { error: "No existe el producto que desea borrar" };
      }
      return productoABorrar;
    }
  }
  
  module.exports = new Productos();