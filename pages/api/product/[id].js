const data = [
    {
      id: "1",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: [{'Verde':'#746464'}, {'Azul':'#875548'}, {'Blanco':'#22222'}],
      talla: ['S', 'M', 'L'],
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200,
      peso: "20"
    },
    {
      id: "2",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: ['S', 'M', 'L'],
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
    {
      id: "3",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: ['S', 'M', 'L'],
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
    {
      id: "4",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: ['S', 'M', 'L'],
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
    {
      id: "5",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: "s",
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
    {
      id: "6",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: "s",
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
    {
      id: "7",
      nombre: "Producto1",
      decripcion: "producto1gggfgb  fbhghgtj hnnjhgj",
      color: ["#746464", "#875548", "22222"],
      talla: "s",
      imagen: [
        "https://educacioninicial.mx/wp-content/uploads/2017/06/porque_muerden.jpg",
        "https://img.europapress.es/fotoweb/fotonoticia_20171029133952_420.jpg",
      ],
      precio: 200.00,
      peso: "20"
    },
  ];
  
  
  export default (req, res) => {
    const {
      query: { id },
    } = req
    
    console.log(req.query.id);
    const product = data.find(x => x.id === id);
    res.status(200).json(product);
  }