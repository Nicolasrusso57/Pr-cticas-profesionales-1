/** 
 * Funcion que toma el valor de un campo de texto, lo eleva al cubo
 * y muestra el resultado en una alerta.
 */

function calcularCubo() {

    //1. Obtener el elemento de entrada (el campo de texto)
    const inputElement = document.getElementById('numeroInput');

    //2. Obtener el valor (siempre es un string al inicio)

    const valor = inputElement.value;

    //--- VALIDACIONES ---

    // a) Verificar que no este vacio 
        if (valor.trim ( ) === "" ) 
        {
           alert(" Porfavor, ingresa un numero entero en el campo.");
           return;
        }

    // b) Convertir el valor a un numero y verificar que sea valido 
           const numero = 
           Number(valor);

        if (isNaN(numero)) {  
            alert("Entrada invalida. Ingresa solo caracteres numericos.");
            return;
        }
    
    // c) (Opcional) Verificar que sea un entero estricto
        
        if (! Number.isInteger (numero)) 
        
        { 
            alert(" Por favor, ingresa un numero *entero* sin decimales.");
           
            return;
        }
        
        
    // --- CALCULO ---
     
    // 3. Elevar el numero al cubo

       // Se puede usar el operador de exponenciacion (**) introduciendo en ES2016 
       const cubo = numero ** 3;
    
    // 4. Mostrar el resultado usando la funcion alert()
       
    {                                                                                      
       alert(`Numero ingresado: $ {numero} \n \n^3 Elevado al cubo es: $ {cubo}`); 
    }

}