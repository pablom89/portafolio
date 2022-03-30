export default [
  {
    titulo:
      "Park Now - App para buscar un estacionamiento en la ciudad de Córdoba.",
    tituloEn:
    "Park Now - App to search for a parking lot in the city of Córdoba, Argentina.",
    descrip:
      `Aplicación creada con React y Redux, que permite buscar estacionamientos cercanos en base a un destino ingresado por el usuario. 
       Trabajé con la API de google, la librería Socket.io y para el back-end utilizamos tanto PHP como Node.js.
       Ingresando la dirección Blamey Lafore 1463, podes ver cocheras cargadas a modo de prueba. `,
    descripEn:
    `Application created with React and Redux, which allows you to search for nearby parking lots based on a destination entered by the user.
    I worked with the google API, the Socket.io library and for the back-end we used both PHP and Node.js.
    By entering the address Blamey Lafore 1463, you can see garages loaded as a test.`,
    link: "https://parking-now.netlify.app/" ,
    iframe: (
      <iframe
        src="https://parking-now.netlify.app/"
        title="flamaApp"
        className="iframe"
        style={{ border: "none" }}
      ></iframe>
    ),
  },
  {
    titulo: "Flama Custom Pizza",
    tituloEn: "Flama Custom Pizza",
    descrip:
      `Flama Pizzas, es un local destinado a la venta de pizzas armadas por los clientes.
      La App tiene como objetivo brindarle al cliente una interfaz digital, en donde pueda realizar su pedido más rápido. 
      Genera un ticket comanda en donde se detalle el pedido, también cuenta con una sección privada, en donde los propietarios pueden, crear o borrar pizzas y/o toppings.`,
    descripEn:
    `Flama Pizzas, is a place for the sale of personalized pizzas, assembled by customers.
     The App aims to provide clients with a digital interface, where they can place their order faster. It generates a ticket comanda where the order is detailed, it also has a private section, where owners can create or delete pizzas and / or toppings.
     `,
    link: "https://flama-pizzas-app.herokuapp.com/",
    iframe: (
      <iframe
        src="https://flama-pizzas-app.herokuapp.com/"
        title="flamaApp"
        className="iframe"
        style={{ border: "none" }}
      ></iframe>
    ),
  },
];
