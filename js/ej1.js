let auto={
    color:'Blanco',
    marca:'Toyota',
    modelo:'Corolla',
    encendido:false,

    encenderAuto(){
        this.encendido=true;
    },

    apagarAuto(){
        this.encendido=false;
    }

     /*get encendido(){
        return this.encendido;
    }*/
}

document.write('<br>Color: '+auto.color);
document.write('<br>Marca: '+auto.marca);
document.write('<br>Modelo: '+auto.modelo);
document.write('<br>Esta encendido?: '+auto.encendido);

//enciendo el auto

auto.encenderAuto();

document.write('<br>Esta encendido?: '+auto.encendido);

//apago el auto

auto.apagarAuto();

document.write('<br>Esta encendido?: '+auto.encendido);