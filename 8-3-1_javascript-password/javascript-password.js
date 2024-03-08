// 1- VERIFICAR PASSWORD

// Crea una petición de password (que tú creas), de manera que si el usuario y el password coinciden con los guardados, dé acceso a la página *, y si no, que siga preguntando.

// Una vez te funcione, intenta hacer la presentación más atractiva mediante CSS.

// + EXTRA: dar un máximo de intentos, por ejemplo, si no se consigue a los 3 intentos, salir del programa

// * para ir a otra página mediante javascript, usar la instrucción:  window.open("https://www.w3schools.com");

function continuar() {
  let passwordCorrecta = "lukeskywalker";
  let intento = 0;

  while (intento < 3) {
    let passwordUsuario = document.getElementById("password").value.toLowerCase();

    if (passwordUsuario === passwordCorrecta) {
      document.write("¡Acceso concedido! ¡Que la fuerza te acompañe!");
      return;
    } else {
      intento++;
      document.querySelector("#mensaje-incorrecto").style.visibility = "visible";
    }

    if (intento >=3){
      document.querySelector("#mensaje-prou").style.visibility="visible";
    }
  }

}

function restablecer() {
  location.reload();
}

