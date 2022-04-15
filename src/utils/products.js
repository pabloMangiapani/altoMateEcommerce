const products = [

{ 
    id: 110,
    name: "Imperial cuero cincelado",
    stock: 30,
    price:8500,
    image: [
      "https://noticiasdelmate.com/wp-content/uploads/2022/02/mate_imperial_en-cuero-labrado_color_marron-1.jpg"
    ], 
    description: "Mate Uruguayo imperial realizado en calabaza forrada en cuero. Guardas y virolas en alpaca.",
    categoryId: 5,
    category: {
      name: "Mates",
      id: 5
    },
},

{ 
    id: 120,
    name: "Imperial base de alpaca",
    stock: 36,
    price:9500,
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/124/112/products/b6bd9c1e-8687-47e9-971d-b0ca4b3915dc-d489a443e8599afe8416314002651530-1024-1024.jpeg"
    ],
    description: "Hecho al detalle con alpaca, cuero y el delicado trabajo de un artesano. Cada uno de ellos es único e irrepetible, distinguiéndose del resto de los imperiales con características propias. Además cuenta con una base hecha de alpaca que le da un toque increíble" ,
    categoryId: 5,
    category: {
      name: "Mates",
      id: 5
    },
},

{ 
    id: 130,
    name: "Camionero virola de alpaca cincelada",
    stock: 52,
    price:6500,
    image: [
      "https://www.elpatrondelmate.com.ar/subidas/elpatrondelmate.com.ar_20201022111051985.jpg"
    ], 
    description:"Mate uruguayo forrado en cuero con virola cincelada a mano, doble costura.",
    categoryId: 5,
    category: {
      name: "Mates",
      id: 5
    },
},

{ 
    id: 140,
    name: "Camionero virola de alpaca",
    stock: 21,
    price:5800,
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/046/687/products/camionero-virola-lisa1-bdd3a4b7785a080fe415914812245459-480-0.jpg"
    ], 
    description:"Mate camionero de calabaza premium seleccionada forrada en cuero vacuno con base de 4 patas con refuerzo para una mayor estabilidad,realizado en calabaza gruesa, lo que otorga mejor sabor y máxima duración y cuenta con la virola realizada en alpaca.",
    categoryId: 5,
    category: {
      name: "Mates",
      id: 5
    },
},

{ 
    id: 150,
    name: "Torpedo virola de alpaca",
    stock: 28,
    price:5500,
    image: [
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/698/468/products/desc-17-11-37d3732f8d7cf207f216388187083059-1024-1024.jpg"
    ], 
    description:"Mate uruguayo torpedo con virola lisa de alpaca, el mismo es forrado en cuero y su interior es de calabaza.",
    categoryId: 5,
    category: {
      name: "Mates",
      id: 5
    },
},

{ 
  id: 160,
  name: "Yerba Canarias 1kg",
  stock: 23,
  price:1200,
  image: [
    "https://http2.mlstatic.com/D_NQ_NP_881492-MLA43326416161_082020-O.jpg"
  ], 
  description:"La Yerba Maté Canarias se produce en el sur de Brasil, en los estados de Santa Catarina, Paraná y Rio Grande Do Sul. El clima de esta región de Brasil es ideal para el desarrollo de las hojas de Mate y permite que se desarrollen los aromas.Tras la cosecha, las hojas se secan y se estacionan de 4 a 6 meses en sacos de 50 kg. Este proceso nos permite obtener, cosecha tras cosecha, Yerba Mate con un sabor uniforme e inalterable durante años.Preparada sin palos y gracias a una molienda muy fina, la Yerba Maté Canarias es una infusión amarga tradicional acorde con el consumo de mate en Uruguay.La composición de Yerba Maté Canarias 1kg, ofrece al consumidor una preparación duradera con intensos aromas de mate.",
  categoryId: 8,
    category: {
      name: "Yerbas",
      id: 8
    },
},

{ 
  id: 170,
  name: "Yerba Canarias 500gr",
  stock: 32,
  price:750,
  image: [
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/941/465/products/6a40b04b-cd4d-4155-9ccb-f36c301efa02_nube-39f5376672ce4c78f515968373570276-1024-1024.jpg"
  ], 
  description:"La Yerba Maté Canarias se produce en el sur de Brasil, en los estados de Santa Catarina, Paraná y Rio Grande Do Sul. El clima de esta región de Brasil es ideal para el desarrollo de las hojas de Mate y permite que se desarrollen los aromas.Tras la cosecha, las hojas se secan y se estacionan de 4 a 6 meses en sacos de 50 kg. Este proceso nos permite obtener, cosecha tras cosecha, Yerba Mate con un sabor uniforme e inalterable durante años.Preparada sin palos y gracias a una molienda muy fina, la Yerba Maté Canarias es una infusión amarga tradicional acorde con el consumo de mate en Uruguay.La composición de Yerba Maté Canarias 500gr, ofrece al consumidor una preparación duradera con intensos aromas de mate.",
  categoryId: 8,
    category: {
      name: "Yerbas",
      id: 8
    },
},

{ 
  id: 180,
  name: "Yerba Rei Verde 1kg",
  stock: 41,
  price:800,
  image: [
    "https://d2r9epyceweg5n.cloudfront.net/stores/951/517/products/20200314_1540521-43ffd8f237b521b61615842113784094-1024-1024.jpg"
  ], 
  description:"Procedente de las reservas naturales de Brasil, elaboracion artesanal, acorde al padron Uruguayo.Bajo contenido de polvo y No contiene palo.",
  categoryId: 8,
    category: {
      name: "Yerbas",
      id: 8
    },
},

{ 
  id: 190,
  name: "Yerba Rei Verde Export 500gr",
  stock: 72,
  price:450,
  image: [
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/441/504/products/141-f604ca67782432127f16080692031298-1024-1024.png"
  ], 
  description:"Yerba mate realizada a partir de hojas estrictamente seleccionadas, con una relación óptima de hoja, palo y goma, necesaria para darle un sabor diferente sin darle intensidad.",
  categoryId: 8,
    category: {
      name: "Yerbas",
      id: 8
    },
},

{ 
  id: 200,
  name: "Matera de Cuero Uruguaya",
  stock: 36,
  price:3800,
  image: [
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/046/687/products/matera-canasta-marron-11-f49e61cb7575ada3fd15926739234767-1024-1024.jpg"
  ], 
  description:"Fabricadas en 100% cuero, lo que (a diferencia de otros materiales) te asegura durabilidad y tranquilidad a la hora de su uso en exteriores. También es fácil de limpiar y no necesita cuidados especiales.Ideal para llevar en el auto, viajes, escapadas de fin de semana y salidas, ya que mantiene cada elemento en su lugar. Es sumamente práctico y elegante; disponibles en colores negro, marrón y borravino, lo cuál permite que la combines con el color de tu mate y la luzcas en cualquier sitio y ocasión.",
  categoryId: 2,
    category: {
      name: "Accesorios",
      id: 2
    },
}

];

module.exports = {
  products,
}
