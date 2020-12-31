/*Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00
Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50
=============================
Vehículo más caro: Peugeot 208
Vehículo más barato: Honda Titan
Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50
=============================
Vehículos ordenados por precio de mayor a menor:
Peugeot 208
Peugeot 206
Yamaha YBR
Honda Titan

La solución debe cumplir con los siguientes requisitos:
Estar programada en Java o Javascript según tu lenguaje de preferencia.
Subir la solución a un repositorio Git público para que podamos descargar la solución directamente.
Diseñar una solución orientada a objetos y subir al repositorio un diagrama de clases junto con el código.
La salida es por consola y exactamente como se requiere.
NO usar librerías de terceros.
Cargar la lista de autos en un único método. No hay ingreso por pantalla de ningún tipo.
El algoritmo usado para la impresión no tiene que depender de la cantidad, modelo o tipo de vehículo. */


//Se define la entrada
let autos = [{
    Marca: "Yamaha ",
    Modelo: "YBR ",
    Cilindrada: "160cc ",
    Precio: "$80.500,50"
}, {
    Marca: "Peugeot ",
    Modelo: "206 ",
    Puertas: "4 ",
    Precio: "$200.000,00"
}, {
    Marca: "Honda ",
    Modelo: "Titan ",
    Cilindrada: "125cc",
    Precio: "$60.000,00"
},{
    Marca: "Peugeot",
    Modelo: "208",
    Puertas: "5 ",
    Precio: "$250.000,00"
},
];
//Inicio
function ejercicio(arr) {
    //Se itera array de objecto para acomodarlo para el print
    for (let index = 0; index < arr.length; index++) {
        let uwu = arr[index];
        let resultado = "";
        let cont = 0;

        for (const property in uwu) {
            
            if (cont === 3) {
                resultado += (property + ": " + uwu[property])

            } else {
                resultado += (property + ": " + uwu[property] + "// ")
                cont++
            }
        }

        console.log(resultado)

    }

    console.log("=============================");
    //Variable auxilar para suma
    let resultado = { Marca: "",
    Modelo: "",
    Puertas: " ",
    Precio: "$0"};
//Se itera 
    for (let index = 0; index < arr.length; index++) {
        let auto = arr[index]
        
        let PrecioAuto = auto.Precio;
        //Se utiliaz replace, replace regex para quitar $ , y puntos
        PrecioAuto = PrecioAuto.replace("$","").replace(/\./g,"").replace(",",".");
        //se pasa a INT
        PrecioAuto = parseFloat((Number(PrecioAuto).toFixed(2)))
        

        //Lo mismo para la variable auxilar
        let ResultadoPrecioNumber = resultado.Precio.replace("$","").replace(/\./g,"").replace(",",".");
        ResultadoPrecioNumber =  parseFloat((Number(ResultadoPrecioNumber).toFixed(2)))

//se realiza una decisión para obtener el mayor
        if (PrecioAuto > ResultadoPrecioNumber) {
            
            resultado = auto
            
            
        }



    }
    //se imprime el mensaje
    console.log(`El auto mas caro es el:  ${resultado.Marca} ${resultado.Modelo} `)
    
    // se realiza lo mismo solo que inverso
    for (let index = 0; index < arr.length; index++) {
        let auto = arr[index]
        
        let PrecioAuto = auto.Precio;
        PrecioAuto = PrecioAuto.replace("$","").replace(/\./g,"").replace(",",".");
        
        PrecioAuto = parseFloat((Number(PrecioAuto).toFixed(2)))
       
        let ResultadoPrecioNumber = resultado.Precio.replace("$","").replace(/\./g,"").replace(",",".");
        ResultadoPrecioNumber =  parseFloat((Number(ResultadoPrecioNumber).toFixed(2)))


        if (PrecioAuto < ResultadoPrecioNumber) {
            
            resultado = auto
            
            
        }
    }

        console.log(`El auto mas barato es el:  ${resultado.Marca} ${resultado.Modelo} `)
//se declara auxiliar
let LetraY = "";
    // se itera array
        for (let index = 0; index < arr.length; index++) {
            let auto = arr[index]
            
            let ModeloAuto = auto.Modelo;
            ModeloAuto =  ModeloAuto.indexOf("Y")
            if (ModeloAuto !== -1) {
                LetraY =   auto.Marca + " " + auto.Modelo + " " + auto.Precio
            }
            else{
                
            }
            
    
           
        }
        // se muestra en pantalla lo requerido
        console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + LetraY)

        console.log("=============================");

    }
    //Se realiza un ordenamiento del tipo burbuja
    function bubbleSort(a, par)
    {
        //se declara variable auxiliar 
        var swapped;
        //Primer ciclo de iteración
        do {
            swapped = false;
            //Segundo ciclo de iteración
            for (var i = 0; i < a.length - 1; i++) {
                 //se declara auxiliares para metodos replace y Number
                    let aux1 = a[i][par]
                    let aux2 = a[i + 1][par]
                    aux1 = aux1.replace("$","").replace(/\./g,"").replace(",",".");
                    aux2 = aux2.replace("$","").replace(/\./g,"").replace(",",".");
                    aux1 = Number(aux1)
                    aux2 = Number(aux2)

                   //se realiza ordenamiento
                    if (aux1 > aux2) {
                        var temp = a[i];
                        var temp2 = a[i + 1];
                        a[i] = temp2
                        a[i+1] = temp;
                        swapped = true;  
                }
                
                

            }
        } while (swapped);
        //se imprime iterando el array
        console.log("Vehículos ordenados por precio de mayor a menor:")
        for (i = 0; i < autos.length; i++) {
            let ultimaaux = autos[i]
            console.log(ultimaaux.Marca + " " + ultimaaux.Modelo )
         }
    }
    
    ejercicio(autos) 
    
    bubbleSort(autos, "Precio");
    
   
