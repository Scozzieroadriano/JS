console.log('Estamos Conectados');
let userName = "";
let userPass = "";

alert("Bienvenido !\n" + "¡Hoy es un gran día para programar!");

function calculadora() {
  let operacion = parseInt(prompt("Que operacion desea realizar? \n 1-SUMA \n 2-RESTA \n 3-MULTIPLICACION \n 4-DIVISION "));

  while (operacion <= 1 || operacion >= 4) {
    alert("Ingrese una opción valida");
    operacion = parseInt(prompt("Que operacion desea realizar? \n 1-SUMA \n 2-RESTA \n 3-MULTIPLICACION \n 4-DIVISION "));
  };

  let primerNum = prompt("Ingrese un número:");
  let segundoNum = prompt("Ingrese otro número:");
  let resultado = 0;
  const validacion = /^\d+$/;

  while (!validacion.test(primerNum) || !validacion.test(segundoNum)) {
    alert("Ingresá un numero válido");
    primerNum = prompt("Ingrese un número:");
    segundoNum = prompt("Ingrese otro número:");
  };

  let numParseado = parseFloat(primerNum);
  let segNumParseado = parseFloat(segundoNum);

  if (operacion === 1) {
    resultado = numParseado + segNumParseado;
    alert("EL RESULTADO DE LA SUMA ES: " + resultado);
  } else if (operacion === 2) {
    resultado = numParseado - segNumParseado;
    alert("EL RESULTADO DE LA RESTA ES: " + resultado);
  } else if (operacion === 3) {
    resultado = numParseado * segNumParseado;
    alert("EL RESULTADO DE LA MULTIPLICACION ES: " + resultado);
  } else if (operacion === 4) {
    resultado = numParseado / segNumParseado;
    alert("EL RESULTADO DE LA DIVISION ES: " + resultado);
  };

  alert("VOLVERÁ AL MENU PRINCIPAL");
};

function validarUsuario() {
  while (true) {
    userName = prompt('Ingrese su usuario');
    userPass = prompt('Ingrese su contraseña');
    

    if (userName === "" || userPass === "") {
      alert("Los campos no pueden estar vacíos. Inténtalo nuevamente.");
      continue;
    }

    let userValid = "Adriano";
    let passValid = "Coder";

    if (userName === userValid && passValid === userPass) {
      alert("Inicio de sesión exitoso");
      break;
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
      
    }
  };
};

function opciones(userName) {

  console.log(userName);
  let opcion = 0;
  while (opcion !== 4) {

    opcion = parseInt(prompt("Elija una de las opciones siguientes para continuar: \n 1 - Saludo \n 2 - Conocer Fecha \n 3 - Calculadora \n 4 - Salir "));

    switch (opcion) {
      case 1:
        alert("Bienvenido " + userName + " ¡¡Hoy es un gran día para programar!!");
        break;
      case 2:
        let fechaHoraActual = new Date();
        console.log(fechaHoraActual);
        alert("La fecha y hora actual es: " + fechaHoraActual);
        break;
      case 3:
        let seleccion = prompt('Ingrese SI para abrir la calculadora, NO para volver al menu anterior');
        if (seleccion === 'SI') {
          alert('LA CALCULADORA SE ABRIRÁ');
          calculadora();
        } else {
          alert('SERA REDIRIGDO AL MENU ANTERIOR');
        }
        break;
      case 4:
        window.close();
        alert("Cierre de sesión exitoso. Vuelva pronto");
        break;
      default:
        console.log("Opción no válida");
    };
  };
};


validarUsuario();
opciones(userName);








