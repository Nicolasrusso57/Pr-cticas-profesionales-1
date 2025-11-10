 <script>    

 //Funcion de JavaScript que se ejecuta cuando se presiona un boton

function mostrarMensaje (numeroBoton) 
{   

// Muestra una alerta con el mesaje alert("Se presiono el boton numero: " + numeroBoton);

//Opcional tambien puedes mostrar el mensaje   en la pagina (en el parrafo con id="mensaje")

document.getElementById('mensaje').textContent = "Ultimo boton presionado:" + numeroBoton;
}

// Asignacion de la funcion a los eventos de clic de cada boton.document.getElementById('btn1').addEventListener('click' , function())

{
    mostrarMensaje(1)
           };

            document.getElementById('btn2').addEventListener('click ' , function())
            {

            mostrarMensaje(2)
                    };

           document.getElementById('btn3').addEventListener('click' , function())
            {
    mostrarMensaje(3): 
            };
            
            </script>