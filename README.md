PRE-ENTREGA 1: Funciones, Ciclos y Bucles JS

La funcion de este proyecto es practicar todos los conceptos vistos hasta el momento.
Comienza con una funcion de logeo donde el usuario es: Adriano  y la contraseña es: Coder

Una vez realizada la validacion del usuario se abre un menu donde podes elegir entre estas opciones:
* Calculadora
* Saludo
* Fecha y Hora
* Salir


Explicacion
Comienzo validando dentro de un bucle while, si los valores ingresados son null, en caso de que alguno
sea null el bucle se repite y vuelve a pedir usuario y contraseña.
De lo contrario si se ingresa el usuario correcto el bucle se interrumpe y
el programa continua hacia otro bucle que es un menu.
En este bucle solo se pueden ingresar valores entre 1 y 4 para obtener una respuesta,
de lo contrario el bucle vuelve a iniciar.

Opcion 1, 2 y 4 son simples: saludar, mostrar fecha-hora y salir

La opcion 3: calculadora, llama a otra funcion donde nuevamente se abre un menu para elegir que tipo de operacion hacer y luego de
validar los valores ingresados muestra el resultado
