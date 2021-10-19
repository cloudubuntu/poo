class Rectangulo{
    constructor(value1, value2){
        this.alto=value1;
        this.ancho=value2;
    }

    /**
     * @param {number} alto
     */
    set cambiarAltura(altura){
        this.alto=altura;
    }

    /**
     * @param {number} ancho
     */
    set CambiarAncho(nuevoAncho){
        this.ancho=nuevoAncho;
    }

    get altoRectangulo(){
        return this.alto;
    }

    get anchoRectangulo(){
        return this.ancho;
    }

    get area(){
        return this.alto*this.ancho;
    }

    get perimetro(){
        return 2*(this.alto+this.ancho);
    }

    detalles(){
        return '<br>El rectangulo tiene una altura de '+this.altoRectangulo+' y un ancho de '+this.anchoRectangulo;
    }


}


document.write('<br>Creando el primer rectangulo');

let rectOne= new Rectangulo( 12, 18);
document.write(rectOne.detalles());
document.write('<br> el Area del Rectangulo es:  '+rectOne.area);
document.write('<br> el Perimetro del Rectangulo es:  '+rectOne.perimetro);

document.write('<br>Cambiando las medidas del primer rectangulo');

rectOne.cambiarAltura=15;
rectOne.CambiarAncho=36;

document.write(rectOne.detalles());

document.write('<br> el Area del Rectangulo es:  '+rectOne.area);
document.write('<br> el Perimetro del Rectangulo es:  '+rectOne.perimetro);

/*rectOne.cambiarAltura=13;
document.write('<br> el alto del rectangulo es: '+rectOne.altoRectangulo);*/
document.write('<hr><br>')

document.write('<br>Creando el segundo rectangulo');

let recTwo=new Rectangulo(23, 64);

document.write(recTwo.detalles());
document.write('<br> el Area del Rectangulo es:  '+recTwo.area);
document.write('<br> el Perimetro del Rectangulo es:  '+recTwo.perimetro);

document.write('<br>Cambiando las medidas del primer rectangulo');

recTwo.cambiarAltura=15;
recTwo.CambiarAncho=36;

document.write(recTwo.detalles());

document.write('<br> el Area del Rectangulo es:  '+recTwo.area);
document.write('<br> el Perimetro del Rectangulo es:  '+recTwo.perimetro);

document.write('<hr><br>')