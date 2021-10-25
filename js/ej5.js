/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/


class Persona{

    constructor(nombre, edad, sexo, peso, altura, anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=this.generaDNI();
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;

    }

    mostrarGeneracion(){
        if(this.anioNacimiento<1948&&this.anioNacimiento>1930){
            return 'Generacion:"Silent Generation", Rasgo Caracteristico: "Austeridad" ';
        } else if(this.anioNacimiento<1968&&this.anioNacimiento>1949){  
            return 'Generacion:"Baby Boom", Rasgo Caracteristico: "Ambicion" ';
        }else if(this.anioNacimiento<1980&&this.anioNacimiento>1969){
            return 'Generacion:"Generacion X", Rasgo Caracteristico: "Obsesion por el exito" ';
        }else if(this.anioNacimiento<1993&&this.anioNacimiento>1981){
            return 'Generacion:"Generacion Y millenials", Rasgo Caracteristico: "Frustracion" ';
        }else if(this.anioNacimiento<2010&&this.anioNacimiento>1994){
            return 'Generacion:"Generacion Z", Rasgo Caracteristico: "Irreverencia" ';
        }else{
            return 'Todavia no posee una Taxonomia de Generacion definida';
        }       
    }

    esMayorDeEdad(){
        if(this.edad>21){
            return true;
        }else{
            return false;
        }
    }

    mostrarDatos(){
        return 'Nombre: '+this.nombre+', Edad: '+this.edad+', DNI: '+this.dni+', Sexo: '+this.sexo+
        ', Peso: '+this.peso+', Altura: '+this.altura+', Año de Nacimiento: '+this.anioNacimiento;
    }

    generaDNI(){
        return parseInt(Math.random()*99999999);
    }
}



let alan=new Persona('alan', 33, 'M', 75, 1.70, 1988);

document.write('<br>'+alan.esMayorDeEdad());
document.write('<br>'+alan.mostrarGeneracion());
document.write('<br>'+alan.mostrarDatos());

