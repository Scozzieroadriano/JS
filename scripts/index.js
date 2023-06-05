console.log('Estamos Conectados');
let userName = "";
let userPass = "";

function opciones(userName){
    console.log(userName)
    let opcion = parseInt(prompt("Elija una de las opciones siguientes para continuar: 1 - Saludo | 2 - Conocer Fecha | 3 - Calculadora"));
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
          console.log("Opción 3 seleccionada");
          break;
        default:
          console.log("Opción no válida");
      }
};

function validarUsuario(){

    while (true){  

        userName = prompt('Ingrese su usuario');
        userPass = prompt('Ingrese su contraseña');
        
        if (userName === "" || userPass === "") {
        alert("Los campos no pueden estar vacíos. Inténtalo nuevamente.");
        continue; 
      }

      let userValid = "Adriano";
      let passValid = "Coder";
  
      if (userName === userValid && passValid === userPass){
        alert("Inicio de sesión exitoso");        
        break;
      } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.");
      }
    };          
    
};

validarUsuario();
opciones(userName);






