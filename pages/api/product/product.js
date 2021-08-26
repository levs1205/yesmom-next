const data = [
  {
    id: "1",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "2",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "3",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "4",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "5",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "6",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
  {
    id: "7",
    nombre: "producto1",
    decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
    color: ["#746464", "#875548", "22222"],
    talla: "s",
    imagen: [
      "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
      "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
    ],
    precio: 200,
    peso: "20"
  },
];


<<<<<<< HEAD:pages/api/index.js
const dataApi = (req,res) => {
   res.status(200).json(data)
}

export default dataApi

=======
export default (req,res) =>{
  setTimeout(()=>{
    res.status(200).json(data);
  },500)
}
>>>>>>> 7ffb13bd35021e79086547a67a17c90f82808bcb:pages/api/product/product.js
