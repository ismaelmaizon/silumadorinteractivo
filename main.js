

alert('Bien vendo al simulador de compra con descuentos!');
alert('Le recuerdo que \n-Al realizar una compra mayora  los 50mil pesos se le aplicara un descuento del 25% ');
let inicio = prompt('¿QUE PRODUSCTOS BUSCAS? (se selecciona con los numeros): \n 1- Sillas \n 2- Puertas \n 3- Cuadros \n 4- Ninguno me voy');

//Productos con sus respectivos precios

let SillasMadera = 5000;
let SillasMetal = 10000;
let SillasPlastico = 3000;


let PuertasMadera = 15000;
let PuertasMetal = 10000;
let PuertasPlastico = 5000;


let CuadrosAerosol = 5000;
let CuadrosFilminas = 2500;
let CuadrosdeArtistas = 30000;


// variables

let carrito = 0;
let TotalSilla = 0;
let TotalPuertas = 0;
let TotalCuadros = 0;

//FUNCIONES


// Si bien las funciones "sillas" "puertas" y "cuadros" no las uso, son las que me ayudaron a entender de forma general
// cuales con los parametros que comparten y me ayudo a crear una funcion "general" la cual me permite reutilizar codigo

function sillas(SillasMadera, SillasMetal, SillasPlastico) {
    let muliplo = 0
    let sillas = prompt('¿QUE TIPO DE SILLAS BUSCAS? (se selecciona con los numeros): \n 1- Mader  Precio: $5000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $3000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    while(sillas !== 4) {

        if (sillas == 4) {
            break;
        }
        switch (sillas) {
            case '1':
                
                if (sillas == 1) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalSilla = SillasMadera * muliplo;
                }
                return TotalSilla;
            case '2':
                
        
                if (sillas == 2) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalSilla = SillasMetal * muliplo;
                }
                return TotalSilla;
            case '3':
                
                
                if (sillas == 3) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalSilla = SillasPlastico * muliplo;
                }
                return TotalSilla;
                
            default:
                alert('opcion no valida');
                break;
        }
    
        inicio = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Mader \n 2- Metal \n 3- Plastico \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    
    }
    return TotalSilla;
}

function puertas(PuertasMadera, PuertasMetal, PuertasPlastico) {
    let muliplo = 0
    let puertas = prompt('¿QUE TIPO DE PUERTAS BUSCAS? (se selecciona con los numeros): \n 1- Mader  Precio: $15000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $5000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    while(puertas !== 4) {

        if (puertas == 4) {
            break;
        }
        switch (puertas) {
            case '1':
                
                if (puertas == 1) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalPuertas = PuertasMadera * muliplo;
                }
                return TotalSilla;
            case '2':
                
        
                if (puertas == 2) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalPuertas = PuertasMetal * muliplo;
                }
                return TotalPuertas;
            case '3':
                
                
                if (puertas == 3) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalPuertas = PuertasPlastico * muliplo;
                }
                return TotalPuertas;
                
            default:
                alert('opcion no valida');
                break;
        }
    
        puertas = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Mader  Precio: $15000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $5000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    
    }
    return TotalPuertas;
}

function cuadros(CuadrosAerosol, CuadrosFilminas, CuadrosdeArtistas) {
    let muliplo = 0
    let cuadros = prompt('¿QUE TIPO DE PUERTAS BUSCAS? (se selecciona con los numeros): \n 1- Aerosol  Precio: $5000\n 2- Filminas  Precion: $2500 \n 3- Artistas  Precio: $30000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    while(cuadros !== 4) {

        if (cuadros == 4) {
            break;
        }
        switch (cuadros) {
            case '1':
                
                if (cuadros == 1) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalCuadros = CuadrosAerosol * muliplo;
                }
                return TotalCuadros;
            case '2':
                
        
                if (cuadros == 2) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalCuadros = CuadrosFilminas * muliplo;
                }
                return TotalCuadros;
            case '3':
        
                
                if (cuadros == 3) {
                    
                    muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                    TotalCuadros = CuadrosdeArtistas * muliplo;
                }
                return TotalCuadros;
                
            default:
                alert('opcion no valida');
                break;
        }
    
        cuadros = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Aerosol  Precio: $5000\n 2- Filminas  Precion: $2500 \n 3- Artistas  Precio: $30000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
    
    }
    return TotalCuadros;
}


function general(parmanetro1, parmanetro2, parmanetro3, indice) {
    let muliplo = 0
    let Total = 0
    switch (indice) {
        case '1':
            let sillas = prompt('¿QUE TIPO DE SILLAS BUSCAS? (se selecciona con los numeros): \n 1- Madera  Precio: $5000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $3000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            while(sillas !== 4) {

                if (sillas == 4) {
                    break;
                }
                switch (sillas) {
                    case '1':
                        
                        if (sillas == 1) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro1 * muliplo;
                        }
                        return Total;
                    case '2':
                        
                
                        if (sillas == 2) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro2 * muliplo;
                        }
                        return Total;
                    case '3':
                        
                        
                        if (sillas == 3) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro3 * muliplo;
                        }
                        return Total;
                        
                    default:
                        alert('opcion no valida');
                        break;
                }
            
                sillas = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Mader \n 2- Metal \n 3- Plastico \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            }
            return Total;

            
        case '2':
            let puertas = prompt('¿QUE TIPO DE PUERTAS BUSCAS? (se selecciona con los numeros): \n 1- Mader  Precio: $15000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $5000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            while(puertas !== 4) {

                if (puertas == 4) {
                    break;
                }
                switch (puertas) {
                    case '1':
                        
                        if (puertas == 1) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro1 * muliplo;
                        }
                        return Total;
                    case '2':
                        
                
                        if (puertas == 2) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro2 * muliplo;
                        }
                        return Total;
                    case '3':
                        
                        
                        if (puertas == 3) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro3 * muliplo;
                        }
                        return Total;
                        
                    default:
                        alert('opcion no valida');
                        break;
                }
            
                puertas = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Mader  Precio: $15000\n 2- Metal  Precion: $10000 \n 3- Plastico  Precio: $5000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            }
            return Total;

        case '3':

            let cuadros = prompt('¿QUE TIPO DE PUERTAS BUSCAS? (se selecciona con los numeros): \n 1- Aerosol  Precio: $5000\n 2- Filminas  Precion: $2500 \n 3- Artistas  Precio: $30000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            while(cuadros !== 4) {

                if (cuadros == 4) {
                    break;
                }
                switch (cuadros) {
                    case '1':
                        
                        if (cuadros == 1) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro1 * muliplo;
                        }
                        return Total;
                    case '2':
                        
                
                        if (cuadros == 2) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro2 * muliplo;
                        }
                        return Total;
                    case '3':
                        
                        
                        if (cuadros == 3) {
                            
                            muliplo = parseInt(prompt('ingrese la cantidad deseada: '));

                            Total = parmanetro3 * muliplo;
                        }
                        return Total;
                        
                    default:
                        alert('opcion no valida');
                        break;
                }
            
                cuadros = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Aerosol  Precio: $5000\n 2- Filminas  Precion: $2500 \n 3- Artistas  Precio: $30000 \n 4- Ninguno me interesa(VUELVE AL MENU DE OPCIONES) ');
            
            }
            return Total;
    }

}


// scrip principal


while(inicio !== 4) {

    if (inicio == 4) {
        break;
    }
    switch (inicio) {
        case '1':
            alert('Seleccionaste Sillas');
            TotalSilla = (general(SillasMadera, SillasMetal, SillasPlastico, inicio));
            break;
        case '2':
            alert('Seleccionaste Puertas');
            TotalPuertas = (general(PuertasMadera, PuertasMetal, PuertasPlastico, inicio));
            break;
        case '3':
            alert('Seleccionaste Cuadros');
            TotalCuadros = (general(CuadrosAerosol, CuadrosFilminas, CuadrosdeArtistas, inicio));
            break;
        default:
            alert('opcion no valida');
            break;
    }

    inicio = prompt('VUELVA A ELEGIR UNA OPCION (se selecciona con los numeros): \n 1- Sillas \n 2- Puertas \n 3- Cuadros \n 4- Fin de la compra \n 5- Ninguno me voy');
    
    
    if (inicio == 5) {
        inicio = 4
    };
}
if (inicio == 4) {
    carrito = TotalSilla + TotalCuadros + TotalPuertas;
    alert ('El total de su comprea es de: $' + carrito)
}

if (carrito >= 50000) {
    let descuento = carrito * 0.25
    let preciofinal = carrito - descuento
    alert ('como su compra supera los $50000 se le aplicará un descuento, el precio final es de: $' + preciofinal)
}

alert('que tenga buen dia!');



