// - Se te piden dos números y te muestra la suma

// - Te pregunta después: “¿quieres continuar (S/N)?”

// - Si es que sí, vuelves a preguntar los números y sumarlos

// - Si es que no, sales del bucle y te despides.

// +EXTRA: además de ir sumando los dos números cada vez, puedes acumular la suma final de todos los números entrados y mostrarla al final.

// Puedes probar primero a hacer sólo la lógica mediante console.log o document.write y después trabajar la presentación:

// - ya sea mediante prompt/alerts (nivel 1)

// - o mediante el uso del DOM para mostrar en pantalla (getElementById/ querySelector/ innerHTML) (nivel 2) Para preguntar, puede seguir usandose prompt para no complicarlo demasiado, ya que si no se precisaría de instrucciones que aún no hemos visto

function sumacion(){
   let num1 = parseInt(prompt("Introduce un número"));
   let num2 = parseInt(prompt("Introduce otro número"));

   document.write(num1+num2); 

   let continuar = prompt("Quieres continuar? (si/no)");

    while (continuar === "si"){
        num1 = parseInt(prompt("Introduce un número"));
        num2 = parseInt(prompt("Introduce otro número"));

        document.write(num1+num2); 

        continuar = prompt("Quieres continuar? (si/no)");
    }
    if (continuar === "no"){
        document.write("De acuerdo, hasta luego!"); 
    }
}


sumacion();


