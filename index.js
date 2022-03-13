const express = require("express");


const app = express();

const PORT = 8080;

const Productos = require("./productos");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/public"));

const routerGlobal = express.Router();

//GET listado
routerGlobal.get("/productos/lista", (req, res) => {
  res.json(Productos.verProductos());
});
//GET producto por ID
routerGlobal.get("/productos/lista/:id", (req, res) => {
  res.json(Productos.verProductosEId(req.params.id));
});
//POST de un producto nuevo sin ID
routerGlobal.post("/productos/guardar", (req, res) => {
  let prodGuardado = Productos.productoNuevo(req.body);
  res.send(prodGuardado);
});
//PUT de un producto nuevo con ID
routerGlobal.put("/productos/actualizar/:id", (req, res) => {
  let prodNuevo = req.body;
  let idProdNuevo = req.params.id;
  let prodActualizado = Productos.actualizarConID(idProdNuevo, prodNuevo);
  res.send(prodActualizado);
});
//DELETE de un producto con ID
routerGlobal.delete("/productos/borrar/:id", (req, res) => {
  let idProdABorrar = req.params.id;
  let prodBorrado = Productos.borrarConID(idProdABorrar);
  res.send(prodBorrado);
});

// Router global
app.use("/api", routerGlobal);

const server = app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor:", error);
});